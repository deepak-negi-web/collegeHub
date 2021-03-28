import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";
import { getString } from "../../utils";

export default function Card({ data, buttonName }) {
  return (
    <Wrapper bgImg={data?.imagePath}>
      <div className="card">
        <div className="content">
          <h2 className="title">{data?.title}</h2>
          <p className="copy">
            {getString(data.courses, " | ", true, "title")}
          </p>
          <Link to={`/${data.title.toLowerCase()}`}>
            <button className="btn">{buttonName}</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
