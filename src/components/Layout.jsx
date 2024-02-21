import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../redux/modules/authSlice";
import styled from "styled-components";

function Layout() {
  const dispatch = useDispatch();
  return (
    <>
      <Containerbar>
        <Link to="/">Home</Link>
        <Logoutbar>
          <li>
            <Link to="/mypage">MYPAGE</Link>
          </li>
          <Link onClick={() => dispatch(logout())}>LOGOUT</Link>
        </Logoutbar>
      </Containerbar>
      <Outlet />
    </>
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
  user-select: none;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logoutbar = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 10px;
  user-select: none;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & li {
    color: white;
  }
`;
