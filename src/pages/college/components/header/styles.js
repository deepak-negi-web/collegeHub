import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  .college_bg_img {
    width: 100%;
    height: 100%;
  }
  .overlay_div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #c33764;
    background: -webkit-linear-gradient(
      rgba(29, 38, 113, 0.4),
      rgba(195, 55, 100, 0.4)
    );
    background: linear-gradient(
      rgba(29, 38, 113, 0.6),
      rgba(195, 55, 100, 0.6)
    );
  }
  .college_logo_img {
    width: 250px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .college_info_div {
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: 1;
    width: 100%;
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    .college_name {
      color: #fff;
      font-size: 26px;
      font-weight: 900;
      margin: 0.25rem 0;
    }
    .college_meta_details {
      display: flex;
      align-items: center;
    }
    .flex_icon {
      display: flex;
      margin-bottom: 4px;
      align-items: center;
      svg {
        margin-right: 3px;
        margin-top: 2px;
      }
      p {
        color: #fff;
        font-weight: 600;
        font-size: 0.75rem;
        margin: 0;
        margin-right: 15px;
        text-transform: uppercase;
      }
    }
    @media (max-width: 769px) {
      padding: 0px 10px;
      .college_name {
        font-size: 18px;
      }
      .flex_icon {
        svg {
          width: 12px;
          height: 12px;
        }
        p {
          font-size: 10px;
        }
      }
      .college_meta_details {
        display: none;
      }
    }
  }
`;
