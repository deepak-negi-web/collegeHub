import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./styled";

export default function Sidebar({ open, close }) {
  return (
    <StyledNav show={open}>
      <span className="close-sidebar" onClick={close}>
        <i className="fas fa-times close-icon" />
      </span>
      <ul>
        <li>
          <NavLink className="link" to="/courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/exam">
            Exam
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/scholarship">
            Scholarship
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/loan">
            Loan
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
