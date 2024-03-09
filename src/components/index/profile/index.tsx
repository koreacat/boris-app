import { useRef } from 'react';
import styled from 'styled-components';
import ProfileTitle from './ProfileTitle';
import HiButton from './HiButton';
import DonateButton from './DonateButton';

const Profile = () => {
  const titleRef = useRef<HTMLSpanElement | null>(null);

  return (
    <ProfileArea>
      <ProfileImage src="/boris01.jpg" alt="Boris the cat" width={360} height={360} />
      <ProfileDetails>
        <ProfileTitle ref={titleRef}/>
        <ProfileText>I love tuna🐟, chasing lasers💥, and now, coding!👨‍💻</ProfileText>
        <ButtonWrap>
          <HiButton titleRef={titleRef}/>
          <DonateButton />
        </ButtonWrap>
      </ProfileDetails>
    </ProfileArea>
  )
}

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border: 1px solid #eee;
  gap: 24px;
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const ProfileImage = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 50%;
`;

const ProfileText = styled.h2`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`;

const ButtonWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
`

export default Profile;