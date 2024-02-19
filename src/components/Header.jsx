import styled from "styled-components";
const Header = () => {
  const HeaderName = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem;
  `;

  return (
    <HeaderBox>
      <HeaderName>✉️💘 내배캠 4기 REACT 튜터님 레터함 💘✉️</HeaderName>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  height: 150px;
  background-color: black;
  border-radius: 10px;
  padding: 3rem;
  color: #f9f9f9;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
