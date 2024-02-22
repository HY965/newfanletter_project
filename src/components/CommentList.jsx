import CommentItem from "./CommentItem";
import { CardLists } from "../style/CommentListStyle";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CommentList = () => {
  const activeItem = useSelector((state) => state.activeItem);
  const letter = useSelector((state) => state.letter);

  const filterLetter = letter.filter(
    (letter) => letter.writedTo === activeItem
  );

  return (
    <CardLists>
      {filterLetter.length === 0 ? (
        <Sing>{activeItem} 에게 남겨진 메시지가 없습니다 추가해주세요!</Sing>
      ) : null}
      {filterLetter.map((letter) => (
        <CommentItem key={letter.id} letter={letter} />
      ))}
    </CardLists>
  );
};

export default CommentList;

const Sing = styled.p`
  color: white;
  padding: 1rem;
  text-align: center;
`;
