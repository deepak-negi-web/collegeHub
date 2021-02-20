import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyleHeader,
  HamburgerWrapper,
  BrandLogo,
  NavBar,
  Spacer,
} from "./styled";
import HamburgerButton from "./hamburger";

export default function Header({ open }) {
  return (
    <StyleHeader>
      <NavBar>
        <HamburgerWrapper>
          <HamburgerButton open={open} />
        </HamburgerWrapper>
        <BrandLogo>
          <NavLink className="brand-link" to="/">
            Brand Logo
          </NavLink>
        </BrandLogo>
        <Spacer />
        <ul>
          <NavLink className="link" to="/courses">
            Courses
          </NavLink>
          <NavLink className="link" to="/exam">
            Exam
          </NavLink>
          <NavLink className="link" to="/scholarship">
            Scholarship
          </NavLink>
          <NavLink className="link" to="/loan">
            Loan
          </NavLink>
        </ul>
      </NavBar>
    </StyleHeader>
  );
}
