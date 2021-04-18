import { gql } from "@apollo/client";
export const COURSES = gql`
  query COURSES {
    courses_courses(limit: 4) {
      id
      name
      duration
    }
  }
`;
