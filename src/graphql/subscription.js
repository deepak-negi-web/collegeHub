import { gql } from "@apollo/client";

export const COURSE_CATEGORIES = gql`
  subscription COURSE_CATEGORIES($limit: Int!) {
    courses_courseCategory(limit: $limit, order_by: { title: desc }) {
      assets
      title
    }
  }
`;
export const COURSE_CATEGORIES_TOTAL = gql`
  subscription COURSE_CATEGORIES_TOTAL {
    totalCategories: courses_courseCategory_aggregate {
      aggregate {
        count
      }
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

export const COLLEGE_INFO = gql`
  subscription COLLEGE_INFO($collegeId: Int!) {
    colleges_college_by_pk(id: $collegeId) {
      id
      name
      assets
      info
      location
      metaDetails
      college_courses(order_by: { fees: asc }) {
        eligibility
        fees
        hasStreams
        id
        streams
        course {
          duration
          id
          name
        }
      }
    }
  }
`;
