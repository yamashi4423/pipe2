import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem 0;
`;
function ParaContainer({ children }: any) {
  return <Container>{children}</Container>;
}

export default ParaContainer;
