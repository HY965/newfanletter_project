import styled from "styled-components";

export const InputWrapper = styled.article`
  background-color: #ccc;
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 10px;
  width: 650px;
`;

export const InputNameAndComment = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const InputTitle = styled.p`
  display: flex;
  align-items: center;
  width: 100px;
  font-weight: bold;
`;

export const InputInfo = styled.input`
  width: 100%;
  padding: 6px 10px;
`;

export const InputCommentInfo = styled.input`
  width: 100%;
  height: 80px;
  padding: 6px 10px;
`;

export const Addbutton = styled.button`
  background-color: #0072d2;
  color: #f9f9f9;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 0.6rem 0.4rem;
  min-height: 3rem;
  cursor: pointer;
`;

export const AddbuttonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
