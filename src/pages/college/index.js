import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSubscription } from "@apollo/client";
import { Wrapper, TabWrapper } from "./styles";
import { CollegeHeader } from "./components";
import { COLLEGE_INFO } from "../../graphql";
import { Loader } from "../../components";
import { ChevronLeft, ChevronRight } from "../../assets/icons";
import { useCollege } from "../../Providers";

export default function College() {
  const { collegeId } = useParams();
  const { addCollegeInfo } = useCollege();
  const [college, setCollege] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //subscription query for getting college info using collegeId
  const { error: collegeInfoError } = useSubscription(COLLEGE_INFO, {
    variables: {
      collegeId: +collegeId,
    },
    onSubscriptionData: ({
      subscriptionData: { data: { colleges_college_by_pk = {} } = {} } = {},
    } = {}) => {
      setCollege(colleges_college_by_pk);
      setIsLoading(false);
      addCollegeInfo(colleges_college_by_pk);
    },
  });

  const scrollRightHandler = () => {
    document.getElementById("experienceTab").scrollLeft += 20;
  };
  const scrollLeftHandler = () => {
    document.getElementById("experienceTab").scrollLeft -= 20;
  };

  if (collegeInfoError) {
    console.log(collegeInfoError);
    setIsLoading(false);
  }
  if (isLoading) return <Loader />;

  return (
    <Wrapper>
      <CollegeHeader college={college} />
      <TabWrapper>
        <div className="tabOptions">
          <div>
            <span
              className="scrollBtn scrollLeftBtn"
              onClick={scrollLeftHandler}
            >
              <ChevronLeft size="18" color="#000" />
            </span>
            <div className="tab" id="experienceTab">
              <ul>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-1">
                    About College
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-2">
                    Courses & fees
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-3">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-4">
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-5">
                    Facility
                  </Link>
                </li>
              </ul>
            </div>
            <span
              className="scrollBtn scrollRightBtn"
              onClick={scrollRightHandler}
            >
              <ChevronRight size="18" color="#000" />
            </span>
          </div>
        </div>
      </TabWrapper>
      <div className="info_wrapper">
        <section id="section-1">
          <h1 className="sub-heading">About College</h1>
          <p className="about-clg">{college.info}</p>
        </section>
        <section id="section-2">
          <h1 className="sub-heading">Courses & fees</h1>
          <p className="about-clg">coming soon...</p>
        </section>
        <section id="section-3">
          <h1 className="sub-heading">Gallery</h1>
          <p className="about-clg">coming soon...</p>
        </section>
        <section id="section-4">
          <h1 className="sub-heading">Faculty</h1>
          <p className="about-clg">coming soon...</p>
        </section>
        <section id="section-5">
          <h1 className="sub-heading">Facility</h1>
          <p className="about-clg">coming soon...</p>
        </section>
      </div>
    </Wrapper>
  );
}
