import type { NextPage } from "next";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../../appolo-client";
import Post from "../../src/components/posts/Post";
import { GET_ONE_POST } from "../../src/graphql/queries/posts";

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

export async function getServerSideProps() {
  let data;
  try {
    const res = await client.query({
      query: GET_ONE_POST,
      variables: { postId: 1 },
    });
    data = res.data;
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    return {
      props: {
        post: data.post,
      },
    };
  }
}

const PostsPage: NextPage = ({ post }: any) => {
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
        <Post post={post} key={post.id} />
      </main>
    </div>
  );
};

export default PostsPage;
