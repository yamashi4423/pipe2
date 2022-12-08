import styled from "@emotion/styled";

const Container = styled.div`
  color: var(--color1);
  font-size: 2rem;
`;

export default function TitleHead({ children }: any) {
  return <Container>{children}</Container>;
}
