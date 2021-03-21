import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyleHeader,
  HamburgerWrapper,
  BrandLogo,
  NavBar,
  Spacer,
  Dropdown,
  Menu,
} from "./styled";
import HamburgerButton from "./hamburger";
import logoImage from "../../assets/logo.jpg";

export default function Header({ open }) {
  const courses = [
    {
      id: "1-btech",
      title: "B.Tech",
    },
    {
      id: "2-mbbs",
      title: "MBBS",
    },
    {
      id: "3-mba",
      title: "MBA",
    },
    {
      id: "4-llb",
      title: "LLB",
    },
    {
      id: "5-design",
      title: "DESIGN",
    },
    {
      id: "6-nursing",
      title: "nursing",
    },
    {
      id: "7-ca",
      title: "CA",
    },
  ];
  const exams = [
    {
      id: "1-gate",
      title: "GATE",
    },
    {
      id: "2-aipmt",
      title: "AIPMT",
    },
    {
      id: "3-cat",
      title: "CAT",
    },
    {
      id: "4-lawcet",
      title: "LAWCET",
    },
    {
      id: "5-cet",
      title: "CET",
    },
    {
      id: "6-neet",
      title: "NEET",
    },
    {
      id: "7-ceed",
      title: "CEED",
    },
  ];
  return (
    <StyleHeader>
      <NavBar>
        <HamburgerWrapper>
          <HamburgerButton open={open} />
        </HamburgerWrapper>
        <BrandLogo>
          <img src={logoImage} alt="brand-logo" />
          <NavLink className="brand-link" to="/">
            CollegeHub
          </NavLink>
        </BrandLogo>
        <Spacer />
        <ul>
          <Menu>
            <NavLink className="link " to="/courses">
              Courses
            </NavLink>
            <Dropdown>
              {courses.slice(0, 3).map((course) => {
                return (
                  <NavLink
                    key={course.id}
                    className="option"
                    to={`/courses/:${course.id}`}
                  >
                    {course.title}
                  </NavLink>
                );
              })}
              <NavLink className="option all-options" to="/courses">
                All Courses
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
