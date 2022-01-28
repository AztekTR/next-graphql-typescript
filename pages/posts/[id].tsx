import type { NextPage } from "next";
import Head from "next/head";
import { ApolloQueryResult, gql } from "@apollo/client";
import client from "../../appolo-client";
import Post from "../../src/components/posts/Post";
import { GET_ONE_POST } from "../../src/graphql/queries/posts/posts";
import { useEffect, useState } from "react";
import HeaderHOC from "../../src/shared/HeaderHOC/HeaderHOC";
import styled from "styled-components";
import pxToRem from "../../src/utils/pixelsToRem";
import { IPost } from "../../src/graphql/queries/posts/posts.interface";

interface IProps {
  post: IPost;
}

const Main = styled.main`
  margin-left: ${pxToRem(12)}rem;
  margin-right: ${pxToRem(12)}rem;
`;

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
      <HeaderHOC>
        <Main>
          <h1>Post management</h1>
          <Post post={post} />
        </Main>
      </HeaderHOC>
    </div>
  );
};

export default PostsPage;
