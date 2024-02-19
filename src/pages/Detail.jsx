import styled from "styled-components";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Detail = ({ letter, setLetter }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const letterDetail = letter.find((letter) => letter.id === id);
  const { nickname, createdAt, content, avatar, writedTo } = letterDetail;
  const [isModify, setIsModify] = useState(false);
  const [ModifyText, setModifyText] = useState("");

  // 날짜 KR변환
  const todayTime = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // 삭제
  const clickDeleteButtonHandler = () => {
    //window.confirm 메서드는 메시지와 함게 확인,취소 버튼은 보여주며 boolean 값을 반환한다. (확인:true / 취소: false를 반환)
    const iscontirmed = window.confirm("삭제하시겠습니까?");
    if (!iscontirmed) return;
    const newLetters = letter.filter((letter) => letter.id !== id);
    navigate("/");
    setLetter(newLetters);
  };

  // 취소,수정 ,수정완료

  const onClickModify = () => {
    setIsModify(true);
  };

  const onClickCancel = () => {
    setIsModify(false);
  };

  const textareaChangeHandler = (e) => {
    setModifyText(e.target.value);
  };

  const onClickModifyDone = () => {
    if (!ModifyText) {
      return alert("수정사항이 없습니다.");
    }
    const newLetter = letter.map((letter) => {
      if (letter.id === id) {
        return { ...letter, content: ModifyText };
      }
      return letter;
    });
    setLetter(newLetter);
    setIsModify(false);
    setModifyText("");
  };

  return (
    <Container>
      <MainBtnWrapper>
        <Link to="/">
          <MainBtn type="text">main으로 가기</MainBtn>
        </Link>
      </MainBtnWrapper>

      <DetailWrapper>
        <UserInfo>
          <UserImg src={avatar} />
          <p>{nickname}</p>
          <p>{todayTime}</p>
        </UserInfo>
        <UserWritedTo>To: {writedTo}</UserWritedTo>

        {isModify ? (
          <>
            {/* textarea태그: 화면에여러줄의 text값을 입력받을때 사용하는 textbox
             autoFocus 속성을 기본적으로 가지고있다! 
             defaultValue 속성은 초기값을 넣을수있다.*/}
            <Textarea
              // autoFocus
              defaultValue={content}
              onChange={textareaChangeHandler}
            />
            <ButtonWrapper>
              <button onClick={onClickCancel}>취소</button>
              <button onClick={onClickModifyDone}>수정완료</button>
            </ButtonWrapper>
          </>
        ) : (
          <>
            <UserComment>{content}</UserComment>
            <ButtonWrapper>
              <button onClick={onClickModify}>수정</button>
              <button onClick={clickDeleteButtonHandler}>삭제</button>
            </ButtonWrapper>
          </>
        )}
      </DetailWrapper>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003172;
  border-radius: 10px;
`;

const MainBtnWrapper = styled.div`
  position: absolute;
  bottom: -60px;
`;

const MainBtn = styled.button`
  background-color: #0072d2;
  color: #f9f9f9;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 0.6rem 0.4rem;
  min-height: 3rem;
  cursor: pointer;
`;

const DetailWrapper = styled.section`
  width: 400px;
  color: white;
`;
const UserComment = styled.div`
  background-color: white;
  color: black;
  width: 350px;
  height: 200px;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 0 auto;
`;

const Textarea = styled.textarea`
  background-color: white;
  color: black;
  width: 350px;
  height: 200px;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 0 0 0 25px;
`;

const UserInfo = styled.div`
  background-color: #004caf;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px 10px 0 0;
  gap: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  margin-top: 50px;
  gap: 10px;
`;

const UserImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  &img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserWritedTo = styled.p`
  color: white;
  padding: 1rem;
`;
