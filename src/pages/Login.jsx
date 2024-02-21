import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/modules/authSlice";
import styled from "styled-components";
import { authApi } from "api/auth-api";

function Login() {
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [id, setId] = useState("");
  const [password, sePassword] = useState("");
  const [nickname, setNickname] = useState("");

  const isLoginDisabled = id === "" || password === "";

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
    if (isLoginMode) {
      try {
        const { data } = await authApi.post("/login", {
          id,
          password,
        });
        const { accessToken, avatar, nickname, userId } = data;
        if (data.success) {
          dispatch(login({ accessToken, avatar, nickname, userId }));
          alert("로그인 완료");
        }
      } catch (err) {
        alert(err.response.data.message);
        console.log("err:", err);
      }
    } else {
      try {
        const { data } = await authApi.post("/register", {
          id,
          password,
          nickname,
        });
        if (data.success) {
          setIsLoginMode(true);
          alert("회원가입 완료");
          e.target.reset();
        }
      } catch (err) {
        alert(err.response.data.message);
        console.log("err:", err);
      }
    }
  };

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
              <Button disabled={isLoginDisabled}>로그인</Button>
            </CardForm>
            <span onClick={loginOnClickHandler}>회원가입</span>
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
              <Button>회원가입</Button>
            </CardForm>
            <span onClick={loginOnClickHandler}>로그인</span>
          </CardWrapper>
        )}
      </div>
    </>
  );
}

export default Login;

const CardWrapper = styled.article`
  width: 500px;
  background-color: #cfcfcf;
  border-radius: 7px;
  padding: 1.5rem;
  & h2 {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 40px;
  }
  & span {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    color: white;
    &:hover {
      transition: all 0.2s ease 0s;
      color: black;
    }
  }
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;

  & input {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid gray;
    outline: none;
    padding: 1rem;
  }
`;

const Button = styled.button`
  padding: 9px 10px;
  border: none;
  font-size: 1rem;
  background-color: #0072d2;
  transition: all 0.4s ease 0s;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0682f0;
    transition: all 0.2s ease 0s;
  }
  &:disabled {
    pointer-events: none;
    border: 1px solid #a1a1a1;
    background-color: #cfcfcf;
  }
`;
