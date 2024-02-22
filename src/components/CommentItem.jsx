import {
  UserInfo,
  UserImg,
  UserComment,
  UserName,
  UserInfoWrapper,
} from "../style/CommentListStyle";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";

const CommentItem = ({ letter }) => {
  const navigate = useNavigate();
  // kR로 날짜표시
  const todayTime = new Date(letter.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <UserInfoWrapper onClick={() => navigate(`/detail/${letter.id}`)}>
      <UserInfo>
        <UserImg>
          <Avatar src={letter.Avatar} />
        </UserImg>
        <UserName>
          <p>{letter.nickname}</p>
          <p>{todayTime}</p>
        </UserName>
      </UserInfo>
      <UserComment>{letter.content}</UserComment>
    </UserInfoWrapper>
  );
};

export default CommentItem;
