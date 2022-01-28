import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import HeaderHOC from "../src/shared/HeaderHOC/HeaderHOC";
import pxToRem from "../src/utils/pixelsToRem";

const Main = styled.main`
  margin-left: ${pxToRem(12)}rem;
  margin-right: ${pxToRem(12)}rem;
  height: calc(100vh - 44px);
`;

const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  font-weight: 500;
  font-size: ${pxToRem(24)}rem;
`;

const Home: NextPage = () => {
  return (
    <HeaderHOC>
      <Main>
        <CenteringDiv>
          <span>Welcome to Next.js/GraphQL/Typescript post management</span>
        </CenteringDiv>
      </Main>
    </HeaderHOC>
  );
};

export default Home;
