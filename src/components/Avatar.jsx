import React from "react";
import defultUser from "assets/defaultUser.png";
import styled, { css } from "styled-components";

function Avatar({ src, size }) {
  return (
    <AvatarFigure size={size}>
      <img src={src ?? defultUser} alt="유저 프로필이미지" />
    </AvatarFigure>
  );
}

export default Avatar;

const AvatarFigure = styled.figure`
  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          width: 70px;
          height: 70px;
        `;
      default:
        return css`
          width: 60px;
          height: 60px;
        `;
    }
  }}

  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
