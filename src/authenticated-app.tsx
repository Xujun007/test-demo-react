import styled from "@emotion/styled";
import React from "react";
import { Row } from "./components/lib";
import { useAuth } from "./context/auth-context";
import { ProjectListScreen } from "./screens/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>jira</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRright>
          <button onClick={logout}>登出</button>
        </HeaderRright>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;
const HeaderLeft = styled(Row)``;
const HeaderRright = styled.div``;
const Header = styled(Row)``;
const Main = styled.main`
  height: calc(100vh - 6rem);
`;
