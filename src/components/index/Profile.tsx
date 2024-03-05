import styled from 'styled-components';
import RainbowText from '../common/RainbowText';
import useCyclingIndex from '../../hooks/useCyclingIndex';
import ProfileTextList from '../../constants/ProfileTextList';
import { useEffect } from 'react';

const Profile = () => {
  const profileTextIndex = useCyclingIndex(ProfileTextList.length, 3000);

  useEffect(() => {
    const root = document.getElementById('root');
    root?.setAttribute('data-cat', 'boris');
  }, []);

  const getProfileText = () => {
    const profileText = ProfileTextList[profileTextIndex]; // B
    return profileText; // C
  }

  const handleClick = () => {
    const profileText = getProfileText(); // A
    alert(`Thanks for visiting! from.${profileText}`); // D
  }

  return (
    <ProfileArea>
      <ProfileImage src="/boris01.jpg" alt="Boris the cat" width={360} height={360}/>
      <ProfileDetails>
        <ProfileTitle>Hi! I'm Boris,<br/><RainbowText>A {getProfileText()}</RainbowText><br />My first React project.</ProfileTitle>
        <ProfileText>I love tuna🐟, chasing lasers💥, and now, coding!👨‍💻</ProfileText>
        <GreetButton onClick={handleClick}>Say Hi to Boris</GreetButton>
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

const ProfileTitle = styled.h2`
  color: #333;
  line-height: 1.5;
`;

const ProfileText = styled.h2`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`;

const GreetButton = styled.button`
  width: 300px;
  background-color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
`;


export default Profile;