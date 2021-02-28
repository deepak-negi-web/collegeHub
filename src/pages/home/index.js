import React from "react";
import { Wrapper } from "./style";
import { CarouselComp } from "../../components";
export default function Home() {
  return (
    <Wrapper>
      <CarouselComp />
      <div className="section_header">
        <h3>EXPLORE ALMOST EVERYTHING</h3>
        <p className="text-md">
          CollegeHub.com is an extensive search engine for the students,
          parents,
          <br />
          and education industry players who are seeking information
        </p>
      </div>
    </Wrapper>
  );
}
