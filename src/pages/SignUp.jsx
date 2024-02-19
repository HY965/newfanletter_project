import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <>
      <div>
        <CardWrapper>
          <h2>회원가입</h2>
          <CardForm>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <input type="text" placeholder="닉네임을 입력해주세요" />
            <button>회원가입</button>
          </CardForm>
          <div>로그인</div>
        </CardWrapper>
      </div>
    </>
  );
}

export default SignUp;

const CardWrapper = styled.article`
  width: 500px;
  height: 50vh;
  background-color: #cfcfcf;
  padding: 1.5rem;
  & h2 {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 40px;
  }
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & input {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid gray;
    outline: none;
  }
`;
