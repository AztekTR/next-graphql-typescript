import type { NextPage } from "next";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../../appolo-client";
import Post from "../../src/components/posts/Post";
import { GET_ALL_POSTS } from "../../src/graphql/queries/posts";

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
  data: IPost[];
}

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_ALL_POSTS });

  return {
    props: {
      data: data.posts.data,
    },
  };
}

const PostsPage: NextPage<IProps> = ({ data }: IProps) => {
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
        {data.map((post: any) => (
          <Post post={post} key={post.id} isLink/>
        ))}
      </main>
    </div>
  );
};

export default PostsPage;
