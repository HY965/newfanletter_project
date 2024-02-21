import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <Containerbar>
      <Link to="/">Home</Link>
      <Logoutbar>
        <li>
          <Link to="/mypage">내프로필</Link>
        </li>
        <li>로그아웃</li>
      </Logoutbar>
    </Containerbar>
  );
}

export default Layout;

const Containerbar = styled.div`
  background-color: black;
  color: white;
  border-bottom: 1px solid white;
  border-radius: 10px 10px 0 0;
  padding: 1rem;
  display: flex;
`;

const Logoutbar = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 10px;
  & li {
    color: white;
  }
`;
