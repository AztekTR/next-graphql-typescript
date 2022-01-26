import type { NextPage } from "next";
import Head from "next/head";
import { ApolloQueryResult, gql } from "@apollo/client";
import client from "../../appolo-client";
import Post from "../../src/components/posts/Post";
import { GET_ONE_POST } from "../../src/graphql/queries/posts";
import { useEffect, useState } from "react";

interface IAuthor {
  username: string;
}

interface IPost {
  id: string;
  title: string;
  body: string;
  author: IAuthor;
}

interface IProps {
  post: IPost;
}

export async function getServerSideProps({ params }: any) {
  const res = await client.query({
    query: GET_ONE_POST,
    variables: { postId: params.id },
  });

  return {
    props: {
      post: res.data.post,
    },
  };
}

const PostsPage: NextPage<IProps> = ({ post }: IProps) => {
  return (
    <div>
      <Head>
        <title>Posts management</title>
        <meta name="description" content="Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Posts management</h1>
      </header>

      <main>
        <Post post={post} />
      </main>
    </div>
  );
};

export default PostsPage;
