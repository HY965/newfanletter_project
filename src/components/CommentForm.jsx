import uuid from "react-uuid";
import { useState } from "react";
import {
  InputWrapper,
  InputNameAndComment,
  InputTitle,
  InputInfo,
  InputCommentInfo,
  AddbuttonWrapper,
  Addbutton,
  Form,
} from "../style/CommentFormStyle";
// 이벤트 설정
const CommentForm = ({ letter, setLetter }) => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [tutors, setTutors] = useState("권혁우 튜터님");

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };
  const selectActorChangeHandler = (event) => {
    setTutors(event.target.value);
  };

  // 댓글추가하기
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nickname || !content) {
      return alert("닉네임과 내용을 입력하세요");
    }
    const newLetter = {
      createdAt: new Date(),
      nickname,
      avatar: null,
      content,
      writedTo: tutors,
      id: uuid(),
    };
    setLetter((prevLetter) => [...prevLetter, newLetter]);
    e.target.reset();
  };

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit}>
        <InputNameAndComment>
          <InputTitle>닉네임:</InputTitle>
          <InputInfo
            onChange={nicknameChangeHandler}
            value={nickname}
            type="text"
            placeholder="닉네임을 적어주세요."
            name="user-name"
            maxLength={15}
          />
        </InputNameAndComment>
        <InputNameAndComment>
          <InputTitle>내용:</InputTitle>
          <InputCommentInfo
            onChange={contentChangeHandler}
            value={content}
            type="text"
            placeholder="200자 이내로 내용을 적어주세요."
            name="comment"
            maxLength={200}
          />
        </InputNameAndComment>
        <InputNameAndComment>
          <p>누구에게 보내실 건가요?</p>
          <select onChange={selectActorChangeHandler}>
            <option>권혁우 튜터님</option>
            <option>김병연 튜터님</option>
            <option>박가현 튜터님</option>
            <option>윤창식 튜터님</option>
            <option>이재상 튜터님</option>
            <option>최원장 튜터님</option>
          </select>
        </InputNameAndComment>
        <AddbuttonWrapper>
          <Addbutton type="submit">팬레터 등록</Addbutton>
        </AddbuttonWrapper>
      </Form>
    </InputWrapper>
  );
};

export default CommentForm;
