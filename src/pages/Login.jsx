import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/modules/authSlice";
import styled from "styled-components";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [id, setId] = useState("");
  const [password, sePassword] = useState("");
  const [nickname, setNickname] = useState("");

  const idOnChangeHandler = (e) => {
    setId(e.target.value);
  };
  const passwordOnChangeHandler = (e) => {
    sePassword(e.target.value);
  };
  const nicknameOnChangeHandler = (e) => {
    setNickname(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (!id || !password) {
    //   return alert("아이디와 비밀번호를 입력해주세요");
    // }
    if (isLoginMode) {
      const { data } = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      if (data.success) {
        dispatch(login());
        alert("로그인 완료");
      }
    } else {
      setIsLoginMode(true);
      alert("회원가입 완료");
      e.target.reset();
    }
  };

  const isLoginDisabled = id === "" || password === "";

  const loginOnClickHandler = () => {
    if (!isLoginMode) {
      setIsLoginMode(true);
      return;
    }
    setIsLoginMode(false);
  };

  return (
    <>
      <div>
        {isLoginMode ? (
          <CardWrapper onSubmit={onSubmitHandler}>
            <h2>로그인</h2>
            <CardForm>
              <input
                onChange={idOnChangeHandler}
                value={id}
                type="text"
                placeholder="아이디를 입력해주세요 (4~10글자)"
                minLength={4}
                maxLength={10}
              />
              <input
                onChange={passwordOnChangeHandler}
                value={password}
                type="password"
                placeholder="비밀번호를 입력해주세요 (4~10글자)"
                minLength={4}
                maxLength={10}
              />
              <button isLoginDisabled={isLoginDisabled}>로그인</button>
            </CardForm>
            <LoginandSingUp onClick={loginOnClickHandler}>
              회원가입
            </LoginandSingUp>
          </CardWrapper>
        ) : (
          <CardWrapper>
            <h2>회원가입</h2>
            <CardForm onSubmit={onSubmitHandler}>
              <input
                onChange={idOnChangeHandler}
                value={id}
                type="text"
                placeholder="아이디를 입력해주세요 (4~10글자)"
                minLength={4}
                maxLength={10}
              />
              <input
                onChange={passwordOnChangeHandler}
                value={password}
                type="password"
                placeholder="비밀번호를 입력해주세요 (4~10글자)"
                minLength={4}
                maxLength={10}
              />
              <input
                onChange={nicknameOnChangeHandler}
                value={nickname}
                type="text"
                placeholder="닉네임을 입력해주세요 (2~10글자)"
                minLength={2}
                maxLength={10}
              />
              <button>회원가입</button>
            </CardForm>
            <LoginandSingUp onClick={loginOnClickHandler}>
              로그인
            </LoginandSingUp>
          </CardWrapper>
        )}
      </div>
    </>
  );
}

export default Login;

const CardWrapper = styled.article`
  width: 500px;
  height: 300px;
  background-color: #cfcfcf;
  border-radius: 7px;
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

  & button {
    font-size: 16px;
    padding: 5px 10px;
    cursor: pointer;
    height: 30px;
    margin-left: auto;
    &:islogindisabled {
      cursor: not-allowed;
    }
  }
`;

const LoginandSingUp = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
