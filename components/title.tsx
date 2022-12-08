import styled from "@emotion/styled";
import TitleHead from "./titleHead";

const Container = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Title({ content }: { content: string }) {
  return (
    <Container>
      <TitleHead>{content}</TitleHead>
    </Container>
  );
}
