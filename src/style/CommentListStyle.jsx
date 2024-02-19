import styled from "styled-components";

export const CardLists = styled.section`
  background-color: #004caf;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 20px;
  width: 650px;
  cursor: pointer;
`;

export const UserInfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid white;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
`;

export const UserImg = styled.figure`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  &img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserName = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserComment = styled.p`
  background-color: #e9e9e9;
  border-radius: 10px;
  padding: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
