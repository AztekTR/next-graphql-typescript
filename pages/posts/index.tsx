import type { NextPage } from "next";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../../appolo-client";
import Post from "../../src/components/posts/Post";
import { GET_ALL_POSTS } from "../../src/graphql/queries/posts/posts";
import HeaderHOC from "../../src/shared/HeaderHOC/HeaderHOC";
import styled from "styled-components";
import pxToRem from "../../src/utils/pixelsToRem";
import { IPost } from "../../src/graphql/queries/posts/posts.interface";

interface IProps {
  data: IPost[];
}

const Main = styled.main`
  margin-left: ${pxToRem(12)}rem;
  margin-right: ${pxToRem(12)}rem;
`;

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
    <HeaderHOC>
      <Main>
        <h1>Posts management</h1>
        {data.map((post: any) => (
          <Post post={post} key={post.id} isLink />
        ))}
      </Main>
    </HeaderHOC>
  );
};

export default PostsPage;
