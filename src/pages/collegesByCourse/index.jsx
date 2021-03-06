import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSubscription } from "@apollo/client";
import { Wrap } from "./styles";
import { COLLEGES_BY_COURSE } from "../../graphql";
import { Loader, Card } from "../../components";
import { stringCapitalize } from "../../utils";

export default function CollegesByCourses() {
  const { courseId, courseTitle = "" } = useParams();
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
      <div className="section_header">
        <h3>Colleges for {stringCapitalize(courseTitle)}.</h3>
        <p className="text-md">
          Don't worry it just a beggining of the the thing you like,
          <br />
          seek information that you find truly interested.
        </p>
      </div>
      <div className="cards_wrapper">
        {colleges.map((college) => {
          return <Card type="college-info" key={college.id} data={college} />;
        })}
        {!colleges.length && (
          <div className="empty_fallback">
            Ohh! No colleges data Available for this course!
            <br />
            Don't worry we will add more colleges soon... <br />
            Checkout other <Link to="/categories">courses</Link> <br />
          </div>
        )}
      </div>
    </Wrap>
  );
}
