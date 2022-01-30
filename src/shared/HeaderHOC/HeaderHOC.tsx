import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import pxToRem from "../../utils/pixelsToRem";

interface IProps {
  children?: ReactNode;
}

const LinkWrapper = styled.div`
  padding: 10px 15px;
  font-size: ${pxToRem(20)}rem;
  font-weight: 500;
`;

const Nav = styled.nav`
  display: flex;
  background-color: #e10098;
`;

const HeaderHOC = ({ children }: IProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Nav>
          <LinkWrapper>
            <Link href="/">Home</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/posts">Posts</Link>
          </LinkWrapper>
        </Nav>
      </header>

      {children}
    </>
  );
};

export default HeaderHOC;
