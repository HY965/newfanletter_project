import styled from "styled-components";

const CommentProfile = ({ activeItem, letter }) => {
  const filterActionImg = letter.filter(
    (letter) => letter.writedTo === activeItem
  );

  return (
    <>
      <ProfileInfo>
        {filterActionImg.map((letter) => (
          <div key={letter.Profile} letter={letter}>
            <Img src={letter.Profile} alt="튜터님 프로필사진" />
            <Title>{letter.writedTo}에게 한마디 남겨보세요!</Title>
          </div>
        ))}
      </ProfileInfo>
    </>
  );
};

export default CommentProfile;

const ProfileInfo = styled.div`
  background-color: #ccc;
  width: 650px;
  padding: 1rem;
  margin-top: 20px;
  border-radius: 10px;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  padding: 1rem;
  margin: 0 auto;
`;
