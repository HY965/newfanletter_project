import Header from "../components/Header";
import Nav from "../components/Nav";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import styled from "styled-components";
import CommentProfile from "../components/CommentProfile";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <Mainstyle>
        <CommentForm />
        <CommentProfile />
        <CommentList />
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
