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
  const [images, setImages] = useState([]);
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
      const requiredObj = Object.keys(
        colleges_college_by_pk?.assets?.images
      ).filter((key) => key !== "main" && key !== "logo");
      const keyVal = requiredObj.map((obj) => {
        return {
          [obj]: colleges_college_by_pk?.assets?.images[obj],
        };
      });

      setImages(keyVal);
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
          <main className="fee-details">
            <table>
              <thead>
                <tr class="table100-head">
                  <th class="column1">Course</th>
                  <th class="column2">Fees(yearly)</th>
                  <th class="column3">duration</th>
                  <th class="column4">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {college?.college_courses.map((item) => {
                  return (
                    <tr>
                      <td class="column1">{item?.course?.name || "N/A"}</td>
                      <td class="column2">{item?.fees?.fee || "N/A"}</td>
                      <td class="column3">{item?.course?.duration || "N/A"}</td>
                      <td class="column4">{item?.eligibility?.[0] || "N/A"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </main>
        </section>
        <section id="section-3">
          <h1 className="sub-heading">Gallery</h1>
          {images.map((image, index) => {
            return (
              <div className="image-category">
                <h2 key={index} className="image-category-head">
                  {Object.keys(image)[0]}
                </h2>
                <div className="grid-view">
                  {image[Object.keys(image)[0]].map((url) => {
                    return (
                      <div className="img-wrap">
                        <img src={url} alt="obj" className="gallery-img" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
        {/* <section id="section-4">
          <h1 className="sub-heading">Faculty</h1>
          <p className="about-clg">coming soon...</p>
        </section>
        <section id="section-5">
          <h1 className="sub-heading">Facility</h1>
          <p className="about-clg">coming soon...</p>
        </section> */}
      </div>
    </Wrapper>
  );
}
