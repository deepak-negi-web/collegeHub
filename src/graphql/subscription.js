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

export const COLLEGES_BY_COURSE = gql`
  subscription COLLEGES_BY_COURSE($courseId: Int!) {
    colleges_college(
      where: { college_courses: { courseId: { _eq: $courseId } } }
    ) {
      id
      info
      location
      metaDetails
      name
      assets
      college_courses {
        id
        hasStreams
        streams
        eligibility
        fees
        courseId
        collegeId
        course {
          id
          duration
          name
        }
      }
    }
  }
`;
