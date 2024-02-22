import Avatar from "components/Avatar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Mypage() {
  const { avatar, nickname, userId } = useSelector((state) => state.authSlice);
  console.log("avatar:", avatar);

  const [isModify, setIsModify] = useState(false);
  const [modifyNickname, setModifyNickname] = useState("");
  const [modifyImg, setModifyImg] = useState(avatar);

  // const nicknameChangeUtil = (e) => {
  //   setModifyNickname(e.target.value);
  // };

  const previwImg = (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = URL.createObjectURL(imgFile);
    setModifyImg(imgUrl);
  };

  const Deactivated = !modifyNickname && modifyImg === avatar;
  return (
    <Container>
      <MypageWrapper>
        <h3>마이페이지</h3>
        <label>
          <Avatar src={modifyImg} />
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/jpg,image/png,image/jpeg"
            onChange={previwImg}
          />
        </label>

        {isModify ? (
          <input
            type="text"
            onChange={(event) => setModifyNickname(event.target.value)}
            defaultValue={nickname}
            autoFocus
          />
        ) : (
          <span>{nickname}</span>
        )}
        <p>{userId}</p>
        {isModify ? (
          <div>
            <button onClick={() => setIsModify(false)}>취소</button>
            <button disabled={Deactivated}>수정완료</button>
          </div>
        ) : (
          <button onClick={() => setIsModify(true)}>수정하기</button>
        )}
      </MypageWrapper>
    </Container>
  );
}

export default Mypage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & div {
    display: flex;
    gap: 10px;
  }
`;

const MypageWrapper = styled.section`
  background-color: #afafaf;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 500px;
  gap: 20px;
  border-radius: 0 0 10px 10px;
  & input {
    outline: none;
  }
  & span {
    font-size: 1rem;
    font-weight: bold;
  }
  & h3 {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
