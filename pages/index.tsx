import styled from "@emotion/styled";
import Link from "next/link";
import ParaContainer from "../components/paraContainer";
import SubTitle from "../components/subTitle";
import TextCenter from "../components/textCenter";
import Title from "../components/title";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 760px;
  padding: 0 10px; // とりあえず
  color: #191919;
`;

export default function Home() {
  const links = [
    { name: "サインイン", link: "/signin" },
    { name: "サインアップ", link: "/signup" },
  ];
  return (
    <Wrapper>
      <Title content="現在開発中です．．．" />
      {/* <ParaContainer>
        <SubTitle>pipeって？</SubTitle>
        <TextCenter>計画をシェアするアプリです．</TextCenter>
      </ParaContainer>
      <ParaContainer>
        <SubTitle>はじめる</SubTitle>
        <ul>
          {links.map((link, key) => (
            <li key={key}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </ParaContainer> */}
    </Wrapper>
  );
}
