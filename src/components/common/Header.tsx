import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderArea>
      <Link to={`/`}>
        <HeaderTitle>Boris's App</HeaderTitle>
      </Link>
    </HeaderArea>
  )
}

const HeaderArea = styled.header`
  position: fixed;
  top: 0;
  width: 768px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: linear-gradient(to right, #3f3f3f, #8c8c8c, #d3d3d3);

  a {
    text-decoration: none; 
    color: initial;
  }
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 24px;
`

export default Header;