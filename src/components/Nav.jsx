import styled from "styled-components";

const Nav = ({ activeItem, setActiveItem }) => {
  const activeItemHandler = (e) => {
    setActiveItem(e.target.textContent);
  };

  return (
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
