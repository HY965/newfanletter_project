import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem } from "../redux/modules/activeItem";
import tutor01 from "../assets/tutor01.png";
import tutor02 from "../assets/tutor02.jpeg";

const Nav = () => {
  const activeItem = useSelector((state) => state.activeItem);
  const letter = useSelector((state) => state.letter);
  const dispatch = useDispatch();
  const activeItemHandler = (e) => {
    dispatch(setActiveItem(e.target.textContent));
  };

  //tutor02,tutor03,tutor04,tutor05,tutor06,

  return (
    <>
      <NavContainer>
        <NavTep>
          <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
            권혁우 튜터님
          </NavTepItem>
          <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
            김병연 튜터님
          </NavTepItem>
          <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
            박가현 튜터님
          </NavTepItem>
          <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
            윤창식 튜터님
          </NavTepItem>
          <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
            이재상 튜터님
          </NavTepItem>
          <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
            최원장 튜터님
          </NavTepItem>
        </NavTep>
      </NavContainer>

      {/* <ProfileInfo>
        <div onClick={activeItemHandler} $activeItem={activeItem}>
          <Img src={tutor01} alt="튜터님 프로필사진" />
          <Title>권혁우 튜터님 에게 한마디 남겨보세요!</Title>
        </div>
      </ProfileInfo> */}
    </>
  );
};

export default Nav;

const NavContainer = styled.nav`
  margin-top: 20px;
`;

const NavTep = styled.ul`
  background-color: #ffffff75;
  box-shadow: 0.1px 1px 5px black;
  border-radius: 10px;
  padding: 1.2rem;
  display: flex;
  justify-content: space-around;
`;

const NavTepItem = styled.li`
  ${(props) =>
    props.$activeItem === props.children
      ? "background-color:#0682f0"
      : "background-color:#0072d2"};
  ${(props) =>
    props.$activeItem === props.children ? "font-weight: bold" : "none"};
  color: white;
  padding: 1rem;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const ProfileInfo = styled.div`
  background-color: #ccc;
  width: 650px;
  padding: 1rem;
  margin-top: 20px;
  border-radius: 10px;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  padding: 1rem;
  margin: 0 auto;
`;
