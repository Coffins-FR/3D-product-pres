import {
  NavWrapper,
  NavElement,
  LinkWrapper,
  Links,
  LogoWrapper,
} from "./NavElement";
import ShoppingCart from "../Icons/ShoppingCart";
import BookMark from "../Icons/BookMark";
import UserProfil from "../Icons/UserProfil";

function Nav() {
  return (
    <NavWrapper>
      <NavElement>
        <LinkWrapper>
          <Links to="/">Home</Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/">Products</Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/">About</Links>
        </LinkWrapper>
      </NavElement>
      <LogoWrapper>DSGN.</LogoWrapper>
      <NavElement>
        <LinkWrapper>
          <Links to="/">
            <UserProfil width="28" height="28" />
          </Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/">
            <BookMark width="28" height="28" />
          </Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/">
            <ShoppingCart width="28" height="28" />
          </Links>
        </LinkWrapper>
      </NavElement>
    </NavWrapper>
  );
}

export default Nav;
