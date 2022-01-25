import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <div>
          <Link href="/posts">Posts</Link>
        </div>
      </Main>
    </div>
  );
};

export default Home;
