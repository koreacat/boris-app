import styled from 'styled-components';
import RainbowText from '../../common/RainbowText';
import useCyclingIndex from '../../../hooks/useCyclingIndex';
import ProfileTextList from '../../../constants/ProfileTextList';
import { LegacyRef, forwardRef } from 'react';

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
    <Title>Hi! I'm Boris,
      <br />
      <RainbowText ref={ref as LegacyRef<HTMLSpanElement>}>A {getProfileText()}</RainbowText>
      <br />My first React project.
    </Title>
  )
});

const Title = styled.h2`
  color: #333;
  line-height: 1.5;
`;

export default ProfileTitle;