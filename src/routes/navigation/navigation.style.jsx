import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LogoContainer = styled(Link)``;
export const NavLinks = styled.div`
  padding: 20px 50px;
`;
export const NavLink = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
`;
