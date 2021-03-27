import React from "react";
import { Wrapper } from "./styles";
import { Card } from "../../components";
import { courseCategories } from "../../fakeData";

export default function Courses() {
  return (
    <Wrapper>
      <div className="section_header">
        <h3>Courses you might interested.</h3>
        <p className="text-md">
          Don't worry it just a beggining of the the thing you like,
          <br />
          seek information that you find truly interested.
        </p>
      </div>
      {/* <Card
        title="hello"
        info="hello"
        image="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        buttonName="Explore"
      /> */}
      <div className="card-wrapper">
        {courseCategories.map((category, index) => {
          return (
            <Card
              key={index}
              title={category.title}
              info={category.info}
              image={category.imagePath}
              buttonName="Explore"
            />
          );
        })}
      </div>
    </Wrapper>
  );
}
