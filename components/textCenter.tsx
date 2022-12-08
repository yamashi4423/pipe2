import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function TextCenter({ children }: { children: string }) {
  return <Container>{children}</Container>;
}

export default TextCenter;
