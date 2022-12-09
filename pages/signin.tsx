import styled from "@emotion/styled";
import React, { useState } from "react";
import Auth from "../components/auth";
import Title from "../components/title";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  margin: 0 auto;
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: start;
`;
const Form = styled.form``;
const NameInput = styled.input``;
const EmailInput = styled.input``;
const PasswordInput = styled.input``;
const Button = styled.button``;

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
  }
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(email);
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(password);
  }

  return (
    <Wrapper>
      <Title content="サインイン" />
      <Container>
        <Form onSubmit={handleSubmit}>
          メールアドレス
          <EmailInput onChange={handleChangeEmail}></EmailInput>
          パスワード
          <PasswordInput onChange={handleChangePassword}></PasswordInput>
          <Button>+</Button>
        </Form>
      </Container>
      <div>
        <Auth />
      </div>
    </Wrapper>
  );
}

export default Signin;
