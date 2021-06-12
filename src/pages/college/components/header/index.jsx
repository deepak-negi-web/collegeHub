import React, { useEffect } from "react";
import { Wrapper } from "./styles";
import { useCollege } from "../../../../Providers";
import {
  MapMarkerIcon,
  BookmarkIcon,
  ThumbPinIcon,
  FlagIcon,
  GovtSectorIcon,
  PrivateSectorIcon,
} from "../../../../assets/icons";

export default function CollegeHeader() {
  const { state: collegeState } = useCollege();
  const { college = {} } = collegeState;

  return (
    <Wrapper>
      <img
        className="college_bg_img"
        src={college?.assets?.images?.main}
        alt="college-header"
      />
      <div className="overlay_div" />
      <img
        className="college_logo_img"
        src={college?.assets?.images?.logo}
        alt="college-header"
      />
      <div className="college_info_div">
        <h1 className="college_name">{college?.name}</h1>
        <div className="flex_icon">
          <MapMarkerIcon size="16" color="#fff" />
          <p>{college?.location}</p>
        </div>
        <div className="college_meta_details">
          <span className="flex_icon">
            <BookmarkIcon size="16" color="#fff" />
            <p>{college?.metaDetails?.accredited_by}</p>
          </span>
          <span className="flex_icon">
            <ThumbPinIcon size="16" color="#fff" />
            <p>{college?.metaDetails?.established}</p>
          </span>
          <span className="flex_icon">
            <FlagIcon size="16" color="#fff" />
            <p>{college?.metaDetails?.affiliated_to}</p>
          </span>
          <span className="flex_icon">
            {college?.metaDetails?.institute_type === "private" ? (
              <PrivateSectorIcon size="16" color="#fff" />
            ) : (
              <GovtSectorIcon size="16" color="#fff" />
            )}
            <p> {college?.metaDetails?.institute_type}</p>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
