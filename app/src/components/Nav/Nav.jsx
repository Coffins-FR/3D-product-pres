import { NavWrapper, NavElement, LinkWrapper, Links } from "./NavElement";

function Nav() {
  return (
    <NavWrapper>
      <NavElement>
        <LinkWrapper>
          <Links to="/">Basics</Links>
        </LinkWrapper>
        <LinkWrapper>
          <Links to="/continue">Advanced</Links>
        </LinkWrapper>
      </NavElement>
    </NavWrapper>
  );
}

export default Nav;
