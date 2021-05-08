import React from "react";
import CourseCategory from "./CourseCategory";
import CourseInfo from "./CourseInfo";
import CollegeInfo from "./CollegeInfo";

export default function Card({ type = "course-category", buttonName, data }) {
  if (type === "course-info") {
    return <CourseInfo data={data} />;
  } else if (type === "college-info") {
    return <CollegeInfo data={data} />;
  } else {
    return <CourseCategory data={data} buttonName={buttonName} />;
  }
}
