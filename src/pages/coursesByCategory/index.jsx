import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSubscription } from "@apollo/client";
import { Wrapper } from "./styles";
import { COURSES_BY_CATEGORY } from "../../graphql";
import { Card, Loader } from "../../components";

export default function CoursesByCategory() {
  const { courseTitle } = useParams();
  const [courses, setCourses] = useState([]);
  const { loading: isCourseLoading, error: hasCourseError } = useSubscription(
    COURSES_BY_CATEGORY,
    {
      variables: {
        courseCategoryTitle: courseTitle,
      },
      onSubscriptionData: ({
        subscriptionData: {
          data: { courses_courses_courseCategory = [] } = {},
        } = {},
      } = {}) => {
        console.log(courses_courses_courseCategory);
        setCourses(courses_courses_courseCategory);
      },
    }
  );

  if (isCourseLoading) {
    return <Loader />;
  }

  if (hasCourseError) {
    console(hasCourseError);
  }

  return (
    <Wrapper>
      {courses.map((course) => {
        return (
          <Card
            key={course?.courseCategoryTitle}
            type="course-info"
            data={course}
          />
        );
      })}
      {!courses.length && <div>No course Available for this category!</div>}
    </Wrapper>
  );
}
