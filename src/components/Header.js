import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const location = useLocation();

  let title = "How'd you get here?";

  switch (location.pathname) {
    case "/":
      title = "Dashboard";
      break;
    case "/items":
      title = "Item Lists";
      break;
    case "/alerts":
      title = "Alerts";
      break;
    case "/activities":
      title = "Activities";
      break;
    case "/users":
      title = "Users";
      break;
    default:
      title = "How'd you get here?";
      break;
  }

  return (
    <HeaderContainer>
      <H2>{title}</H2>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  border-bottom: 2px solid #2b486a;
  margin-bottom: 24px;
`;

const H2 = styled.h2`
  font-size: 30px;
`;

export default Header;
