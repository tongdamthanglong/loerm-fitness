import { Outlet } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/react.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <ReactLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exercises">Exercises</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
