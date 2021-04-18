import { gql } from "@apollo/client";

export const COURSE_CATEGORIES = gql`
  subscription COURSE_CATEGORIES {
    courses_courseCategory {
      assets
      title
    }
  }
`;

export const COURSES_BY_CATEGORY = gql`
  subscription COURSES_BY_CATEGORY($courseCategoryTitle: String!) {
    courses_courses_courseCategory(
      where: { courseCategoryTitle: { _eq: $courseCategoryTitle } }
    ) {
      courseType
      courseCategoryTitle
      course {
        id
        name
        duration
      }
    }
  }
`;
