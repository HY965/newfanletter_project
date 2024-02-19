import React from "react";

const SignUp = () => {
  return (
    <>
      <div>
        <article>
          <h2>회원가입</h2>
          <form>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <input type="text" placeholder="닉네임을 입력해주세요" />

            <button>회원가입</button>
          </form>
        </article>

        <div>로그인</div>
      </div>
    </>
  );
};

export default SignUp;
