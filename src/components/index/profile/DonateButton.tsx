import styled from 'styled-components';
import useToast from '../../../hooks/useToast';
import { memo } from 'react';

/**
 * TODO
 * [리액트 개발자 도구 - 기명 함수 사용하기]
 */

const DonateButton = memo(() => {
  const { showToast } = useToast();
  return (
    <Button onClick={() => showToast('Thank you for showing your love for Boris with your donation! 🐟🐱')}>🐟 Donate</Button>
  )
});

const Button = styled.button`
  width: 300px;
  height: 40px;
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

export default DonateButton;