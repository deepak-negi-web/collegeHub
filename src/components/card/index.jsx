import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Wrapper, InfoCard } from "./styles";
import { getString, stringCapitalize } from "../../utils";

const CourseInfoCard = ({ data }) => {
  const { pathname } = useLocation();
  // const handleCardClick = () => {
  //   history.push(`/category/${data?.title}`);
  // };
  return (
    <InfoCard>
      <div class="left">
        <div class="left-info-div">
          {console.log(data)}
          <h1>{data?.course?.name}</h1>
          <div class="flex">
            <small>{data?.course?.duration} Years</small>
            <small>{data?.courseCategoryTitle}</small>
            <small>{data?.courseType}</small>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-info-div">
          <button>Apply Now</button>
          <Link to={`${pathname}/${data?.course?.id}`}>
            Check Colleges Offering this course
          </Link>
        </div>
      </div>
    </InfoCard>
  );
};

export const CourseCategoryCard = ({ data, buttonName }) => {
  const { pathname } = useLocation();
  return (
    <Wrapper bgImg={data?.assets?.images[0]}>
      <div className="card">
        <div className="content">
          <h2 className="title">{stringCapitalize(data?.title || "")}</h2>
          {/* <p className="copy">
            {getString(data.courses, " | ", true, "title")}
          </p> */}
          <Link to={`${pathname}/${data?.title?.toLowerCase()}`}>
            <button className="btn">{buttonName}</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default function Card({ type = "course-category", buttonName, data }) {
  if (type === "course-info") {
    return <CourseInfoCard data={data} />;
  } else {
    return <CourseCategoryCard data={data} buttonName={buttonName} />;
  }
}
