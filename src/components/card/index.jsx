import React from "react";
import { Wrapper } from "./styles";

export default function Card({ title, info, buttonName, image }) {
  return (
    <Wrapper bgImg={image}>
      <div className="card">
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="copy">{info}</p>
          <button className="btn">{buttonName}</button>
        </div>
      </div>
    </Wrapper>
  );
}
