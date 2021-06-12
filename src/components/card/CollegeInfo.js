import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { CollegeInfoCard } from "./styles";

export default function CollegeInfo({ data }) {
  const {
    id,
    info = "N/A",
    metaDetails = {},
    name = "N/A",
    assets = {},
    location = "",
    college_courses = [],
  } = data;
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = college_courses.find(
    (courses) => courses.courseId === +courseId
  );
  console.log(courseId, college_courses, course);
  return (
    <CollegeInfoCard mainImage={assets?.images?.main}>
      <div className="college_img_wrapper">
        <div className="bg_overlay">
          <h1 className="college_name">{name}</h1>
          <img src={assets?.images?.logo} alt="logo" />
          <small>{location}</small>
        </div>
      </div>
      <div className="college_info_wrapper">
        <div className="row">
          <p>
            ₹ {course?.fees?.fee || "N/A"} {course?.fees?.type}
          </p>
          <p>Courses: {college_courses.length}</p>
          <p>
            <Link to={`${pathname}/${id}`}>View more</Link>
          </p>
        </div>
        <div className="apply_now_button">
          <button>Apply Now</button>
        </div>
      </div>
    </CollegeInfoCard>
  );
}
