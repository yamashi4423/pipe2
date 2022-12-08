import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeadContainer = styled.div``;

function Header() {
  return (
    <Wrapper>
      <HeadContainer>pipe</HeadContainer>
    </Wrapper>
  );
}

export default Header;
