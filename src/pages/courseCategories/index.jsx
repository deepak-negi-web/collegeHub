import React, { useState } from "react";
import { useSubscription } from "@apollo/client";
import { Wrapper } from "./styles";
import { Card, Loader, InlineLoader } from "../../components";
import { COURSE_CATEGORIES, COURSE_CATEGORIES_TOTAL } from "../../graphql";
import InfiniteScroll from "react-infinite-scroll-component";
// import { courseCategories } from "../../fakeData";

export default function Courses() {
  const [courseCategories, setCourseCategories] = useState([]);
  const [totalCategories, setTotalCategories] = useState(0);
  const [limit, setLimit] = useState(9);
  const { loading, error } = useSubscription(COURSE_CATEGORIES, {
    variables: {
      limit,
    },
    onSubscriptionData: ({
      subscriptionData: { data: { courses_courseCategory = [] } = {} } = {},
    } = {}) => {
      setCourseCategories(courses_courseCategory);
    },
  });
  const { loading: totalCategoriesLoading, error: hasErrorInTotal } =
    useSubscription(COURSE_CATEGORIES_TOTAL, {
      onSubscriptionData: ({
        subscriptionData: { data: { totalCategories = [] } = {} } = {},
      } = {}) => {
        console.log({ totalCategories: totalCategories?.aggregate?.count });
        setTotalCategories(totalCategories?.aggregate?.count);
      },
    });

  const loadMoreHandler = () => {
    setLimit((prev) => prev + 6);
  };

  if (loading || totalCategoriesLoading) {
    return <InlineLoader />;
  }
  if (error || hasErrorInTotal) {
    console.log(error || hasErrorInTotal);
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

      <InfiniteScroll
        dataLength={courseCategories.length} //This is important field to render the next data
        next={loadMoreHandler}
        hasMore={courseCategories.length < totalCategories}
        loader={<InlineLoader />}
      >
        <div className="card-wrapper">
          {courseCategories.map((category) => {
            return (
              <Card
                key={category?.title}
                data={category}
                buttonName="Explore"
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </Wrapper>
  );
}
