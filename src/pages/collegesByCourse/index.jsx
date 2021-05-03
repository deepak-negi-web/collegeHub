import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSubscription } from "@apollo/client";
import { Wrap } from "./styles";
import { COLLEGES_BY_COURSE } from "../../graphql";
import { Loader } from "../../components";

export default function CollegesByCourses() {
  const { courseId } = useParams();
  const [colleges, setColleges] = useState([]);
  const { loading: isCollegesDataLoading, error: hasError } = useSubscription(
    COLLEGES_BY_COURSE,
    {
      variables: {
        courseId: parseInt(courseId),
      },
      onSubscriptionData: ({
        subscriptionData: { data: { colleges_college = [] } = {} } = {},
      } = {}) => {
        setColleges(colleges_college);
      },
    }
  );
  if (isCollegesDataLoading) {
    return <Loader />;
  }
  if (hasError) {
    console.log(hasError);
  }
  return (
    <Wrap>
      {colleges.map((college) => {
        return <h1 key={college.id}>{college?.name || ""}</h1>;
      })}
    </Wrap>
  );
}
