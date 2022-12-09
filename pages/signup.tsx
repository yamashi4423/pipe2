import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Title from "../components/title";
import { AppContext } from "../lib/context";
import prisma from "../lib/seed";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

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

function signup() {
  const { users, setUsers } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // 引数のユーザーをデータベースに追加
  async function createUser(userData: CreateUserProps) {
    try {
      const res = await fetch("http://localhost:3000/api/v1/users", {
        body: JSON.stringify(userData),
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("CREATE USER", data.user);
      // setUsers([...users, data.user]); // いる？
    } catch (err) {
      console.log(err);
    }
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    createUser({ name: name, email: email, password: password }); // ユーザーを作成（してデータベースに格納）
    router.push("/"); // ホームページへリダイレクト
  }
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <Wrapper>
      <Title content="サインアップ" />
      <Container>
        <Form onSubmit={handleSubmit}>
          名前
          <NameInput onChange={handleChangeName}></NameInput>
          メールアドレス
          <EmailInput onChange={handleChangeEmail}></EmailInput>
          パスワード
          <PasswordInput onChange={handleChangePassword}></PasswordInput>
          <Button>+</Button>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default signup;
