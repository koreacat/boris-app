import styled from 'styled-components';
import RainbowText from '../../common/RainbowText';
import useCyclingIndex from '../../../hooks/useCyclingIndex';
import ProfileTextList from '../../../constants/ProfileTextList';
import { LegacyRef, forwardRef, memo } from 'react';


interface SubTitleProps {
  value: string;
}

const SubTitle = memo(({ value }: SubTitleProps) => {
  return (
    <span>{value}</span>
  )
});


/**
 * TODO
 * [리액트 개발자 도구 - displayName 사용하기]
 */

const ProfileTitle = forwardRef(({}, ref) => {
  const profileTextIndex = useCyclingIndex(ProfileTextList.length, 3000);

  const getProfileText = () => {
    const profileText = ProfileTextList[profileTextIndex];
    return profileText;
  }

  return (
    <Title>
      <SubTitle value="Hi! I'm Boris,"/>
      <br />
      <RainbowText ref={ref as LegacyRef<HTMLSpanElement>}>A {getProfileText()}</RainbowText>
      <br />
      <SubTitle value="My first React project."/>
    </Title>
  )
});

const Title = styled.h2`
  color: #333;
  line-height: 1.5;
`;

export default ProfileTitle;