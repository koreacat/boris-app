import styled, { keyframes } from "styled-components";

const rainbowAnimation = keyframes`
  0% { color: red; }
  14% { color: orange; }
  28% { color: yellow; }
  42% { color: green; }
  57% { color: blue; }
  71% { color: indigo; }
  85% { color: violet; }
  100% { color: red; }
`;

const RainbowText = styled.span`
  animation: ${rainbowAnimation} 2s linear infinite;
`;

export default RainbowText;