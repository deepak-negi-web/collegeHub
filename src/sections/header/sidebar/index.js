import React from "react";
import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import {
  StyleHeader,
  HamburgerWrapper,
  BrandLogo,
  NavBar,
  Spacer,
  Dropdown,
  Menu,
  StyledNav,
} from "./styled";
// import { HamburgerIcon } from "../../assets/icons";
// import logoImage from "../../assets/logo.jpg";
import { exams } from "../../../fakeData";
import { getCourseAbbreviation } from "../../../utils";
import { COURSES } from "../../../graphql";
import { Loader } from "../../../components";

export default function Sidebar({ open, close }) {
  const {
    loading: isCoursesLoading,
    data: { courses_courses: courses = [] } = {},
  } = useQuery(COURSES, {
    onError: (error) => {
      console.log(error);
    },
  });

  if (isCoursesLoading) {
    return <Loader />;
  }
  return (
    <StyledNav show={open}>
      <span className="close-sidebar" onClick={close}>
        <i className="fas fa-times close-icon" />
      </span>
      <ul>
        <Menu>
          <NavLink className="link " to="/courses">
            Courses
          </NavLink>
          <Dropdown>
            {courses.map((course) => {
              return (
                <NavLink
                  key={course?.id}
                  className="option"
                  to={`/courses/${course?.id}/${getCourseAbbreviation(
                    course?.name
                  )}`}
                >
                  {getCourseAbbreviation(course?.name)}
                </NavLink>
              );
            })}
            <NavLink className="option all-options" to="/courses">
              All Courses
            </NavLink>
            <NavLink className="option all-options" to="/categories">
              All Category
            </NavLink>
          </Dropdown>
        </Menu>
        <Menu>
          <NavLink className="link" to="/exams">
            Exam
          </NavLink>
          <Dropdown>
            {exams.slice(0, 3).map((exam) => {
              return (
                <NavLink
                  key={exam.id}
                  className="option"
                  to={`/exams/:${exam.id}`}
                >
                  {exam.title}
                </NavLink>
              );
            })}
            <NavLink className="option all-options" to="/exams">
              All Exams
            </NavLink>
          </Dropdown>
        </Menu>
        <Menu>
          <NavLink className="link" to="/scholarship">
            Scholarship
          </NavLink>
        </Menu>
        <Menu>
          <NavLink className="link" to="/loan">
            Loan
          </NavLink>
        </Menu>
      </ul>
    </StyledNav>
  );
}
