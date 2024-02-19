import Header from "../components/Header";
import Nav from "../components/Nav";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { useState } from "react";
import styled from "styled-components";
import CommentProfile from "../components/CommentProfile";

const Home = ({ letter, setLetter }) => {
  const [activeItem, setActiveItem] = useState("권혁우 튜터님");

  return (
    <>
      <Header />
      <Nav activeItem={activeItem} setActiveItem={setActiveItem} />
      <Mainstyle>
        <CommentForm setLetter={setLetter} />
        <CommentProfile activeItem={activeItem} letter={letter} />
        <CommentList activeItem={activeItem} letter={letter} />
      </Mainstyle>
    </>
  );
};

export default Home;

const Mainstyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
