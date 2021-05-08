import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { InfoCard } from "./styles";

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
          <Link to={`${pathname}/${data?.course?.id}/colleges`}>
            Check Colleges Offering this course
          </Link>
        </div>
      </div>
    </InfoCard>
  );
};

export default CourseInfoCard;
