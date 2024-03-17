import styled from 'styled-components';

interface HiButtonProps {
  titleRef: React.MutableRefObject<HTMLSpanElement | null>;
}

const HiButton = ({ titleRef }: HiButtonProps) => {

  /**
   * TODO 1.
   * [소스 패널 - 중단점]
   */

  const getProfileText = () => {
    const profileText = titleRef?.current?.innerHTML || 'Boris'; // B
    return profileText; // C
  }

  const handleClickHi = () => {
    const profileText = getProfileText(); // A
    alert(`Thanks for visiting! from.${profileText}`); // D
  }

  return (
    <Button onClick={handleClickHi}>Say Hi to Boris</Button>
  )
}

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

export default HiButton;