import styled from "@emotion/styled";

const Container = styled.div`
  font-size: 1.5rem;
  color: var(--color4);
  padding: 1rem 0;
`;

export default function SubTitle({ children }: { children: string }) {
  return <Container>{children}</Container>;
}
