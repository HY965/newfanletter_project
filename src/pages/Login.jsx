import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Login() {
  const [changeState, setChangeState] = useState(false);

  const loginOnClickHandler = () => {
    if (!changeState) {
      setChangeState(true);
      return;
    }
    setChangeState(false);
  };
  return (
    <>
      <div>
        {changeState ? (
          <CardWrapper>
            <h2>회원가입</h2>
            <CardForm>
              <input type="text" placeholder="아이디를 입력해주세요" />
              <input type="password" placeholder="비밀번호를 입력해주세요" />
              <input type="text" placeholder="닉네임을 입력해주세요" />
              <button>회원가입</button>
            </CardForm>
            <span onChange={loginOnClickHandler}>로그인</span>
          </CardWrapper>
        ) : (
          <CardWrapper>
            <h2>로그인</h2>
            <CardForm>
              <input type="text" placeholder="아이디를 입력해주세요" />
              <input type="password" placeholder="비밀번호를 입력해주세요" />
              <button>로그인</button>
            </CardForm>
            <span>회원가입</span>
          </CardWrapper>
        )}
      </div>
    </>
  );
}

export default Login;

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
