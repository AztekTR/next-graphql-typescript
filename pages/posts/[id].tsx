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
  title: string;
  body: string;
  author: IAuthor;
}

interface IProps {
  data: IPost[];
}

const PostsPage: NextPage = () => {
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    client
      .query({
        query: GET_ONE_POST,
        variables: { postId: 1 },
      })
      .then((res: ApolloQueryResult<any>) => {
        setPost(res.data.post);
      });

    setIsLoading(false);
  }, []);

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
        { isLoading ? 'loading...' : <Post post={post} />}
      </main>
    </div>
  );
};

export default PostsPage;
