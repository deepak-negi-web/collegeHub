import React, { useState } from "react";
import { useSubscription } from "@apollo/client";
import { Wrapper } from "./styles";
import { Card, Loader } from "../../components";
import { COURSE_CATEGORIES } from "../../graphql";
// import { courseCategories } from "../../fakeData";

export default function Courses() {
  const [courseCategories, setCourseCategories] = useState([]);
  const { loading, error } = useSubscription(COURSE_CATEGORIES, {
    onSubscriptionData: ({
      subscriptionData: { data: { courses_courseCategory = [] } = {} } = {},
    } = {}) => {
      console.log(courses_courseCategory);
      setCourseCategories(courses_courseCategory);
    },
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    console.log(error);
  }
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
      <div className="card-wrapper">
        {courseCategories.map((category) => {
          return (
            <Card key={category?.title} data={category} buttonName="Explore" />
          );
        })}
      </div>
    </Wrapper>
  );
}
