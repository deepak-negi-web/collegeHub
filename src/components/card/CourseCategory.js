import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Wrapper } from "./styles";
import { stringCapitalize } from "../../utils";

const CourseCategoryCard = ({ data, buttonName }) => {
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

export default CourseCategoryCard;
