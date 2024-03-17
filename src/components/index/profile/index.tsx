import { LegacyRef, useRef } from 'react';
import styled from 'styled-components';
import ProfileTitle from './ProfileTitle';
import HiButton from './HiButton';
import DonateButton from './DonateButton';

/**
 * TODO
 * [리액트 개발자 도구 - profiler로 리렌더링 확인하기 - Bad Code]
 */
import useCyclingIndex from '../../../hooks/useCyclingIndex';
import ProfileTextList from '../../../constants/ProfileTextList';
import RainbowText from '../../common/RainbowText';

interface SubTitleProps {
  value: string;
}

const SubTitle = ({ value }: SubTitleProps) => {
  return (
    <span>{value}</span>
  )
};

const Profile = () => {
  const profileTextIndex = useCyclingIndex(ProfileTextList.length, 3000);
  const titleRef = useRef<HTMLSpanElement | null>(null);

  const getProfileText = () => {
    const profileText = ProfileTextList[profileTextIndex];
    return profileText;
  }

  return (
    <ProfileArea>
      <ProfileImage src="/boris01.jpg" alt="Boris the cat" width={360} height={360} />
      <ProfileDetails>
        <Title>
          <SubTitle value="Hi! I'm Boris,"/>
          <br />
          <RainbowText ref={titleRef as LegacyRef<HTMLSpanElement>}>A {getProfileText()}</RainbowText>
          <br />
          <SubTitle value="My first React project."/>
        </Title>
        <ProfileText>I love tuna🐟, chasing lasers💥, and now, coding!👨‍💻</ProfileText>
        <ButtonWrap>
          <HiButton titleRef={titleRef} />
          <DonateButton />
        </ButtonWrap>
      </ProfileDetails>
    </ProfileArea>
  )
}

const Title = styled.h2`
  color: #333;
  line-height: 1.5;
`;

/**
 * TODO
 * [리액트 개발자 도구 - profiler로 리렌더링 확인하기 - Good Code]
 */

// const Profile = () => {
//   const titleRef = useRef<HTMLSpanElement | null>(null);

//   return (
//     <ProfileArea>
//       <ProfileImage src="/boris01.jpg" alt="Boris the cat" width={360} height={360} />
//       <ProfileDetails>
//         <ProfileTitle ref={titleRef}/>
//         <ProfileText>I love tuna🐟, chasing lasers💥, and now, coding!👨‍💻</ProfileText>
//         <ButtonWrap>
//           <HiButton titleRef={titleRef}/>
//           <DonateButton />
//         </ButtonWrap>
//       </ProfileDetails>
//     </ProfileArea>
//   )
// }

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