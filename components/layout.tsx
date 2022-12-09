import styled from "@emotion/styled";
import React from "react";
import Header from "./header";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  height: 2rem;
  background-color: var(--color2);
`;
const MainWrapper = styled.div`
  height: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  background-color: var(--color3);
`;

function Layout({ children }: any) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
    </Wrapper>
  );
}

export default Layout;
