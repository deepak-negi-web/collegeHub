import styled from "styled-components";
export const Wrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    padding: 1rem;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    background-color: whitesmoke;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
      0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
      0 16px 16px rgba(0, 0, 0, 0.1);
  }

  .card:before {
    background-image: ${({ bgImg }) => `url(${bgImg})`};
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    width: 100%;
    height: 110%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
  }
  .card:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.009) 11.7%,
      rgba(0, 0, 0, 0.034) 22.1%,
      rgba(0, 0, 0, 0.072) 31.2%,
      rgba(0, 0, 0, 0.123) 39.4%,
      rgba(0, 0, 0, 0.182) 46.6%,
      rgba(0, 0, 0, 0.249) 53.1%,
      rgba(0, 0, 0, 0.32) 58.9%,
      rgba(0, 0, 0, 0.394) 64.3%,
      rgba(0, 0, 0, 0.468) 69.3%,
      rgba(0, 0, 0, 0.54) 74.1%,
      rgba(0, 0, 0, 0.607) 78.8%,
      rgba(0, 0, 0, 0.668) 83.6%,
      rgba(0, 0, 0, 0.721) 88.7%,
      rgba(0, 0, 0, 0.762) 94.1%,
      rgba(0, 0, 0, 0.79) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
  }
  .content > * + * {
    margin-top: 1rem;
  }
  .title {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
  }
  .copy {
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
  }
  .btn {
    cursor: pointer;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.65rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: white;
    background-color: black;
    border: none;
    a {
      text-decoration: none;
      color: white;
    }
  }
  .btn:hover {
    background-color: #0d0d0d;
    border: 1px solid #f4f4f4;
  }
  .btn:focus {
    border: 1px solid #f4f4f4;
    outline: none;
  }
  @media (hover: hover) and (min-width: 600px) {
    .card:after {
      transform: translateY(0);
    }
    .content {
      transform: translateY(calc(100% - 4.5rem));
    }
    .content > *:not(.title) {
      opacity: 0;
      transform: translateY(1rem);
      transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1),
        opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    .card:hover,
    .card:focus-within {
      align-items: center;
    }
    .card:hover:before,
    .card:focus-within:before {
      transform: translateY(-4%);
    }
    .card:hover:after,
    .card:focus-within:after {
      transform: translateY(-50%);
    }
    .card:hover .content,
    .card:focus-within .content {
      transform: translateY(0);
    }
    .card:hover .content > *:not(.title),
    .card:focus-within .content > *:not(.title) {
      opacity: 1;
      transform: translateY(0);
      transition-delay: calc(700ms / 8);
    }
    .card:focus-within:before,
    .card:focus-within:after,
    .card:focus-within .content,
    .card:focus-within .content > *:not(.title) {
      transition-duration: 0s;
    }
  }
`;

export const InfoCard = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  border-radius: 4.4px;
  box-shadow: rgba(207, 207, 207, 0.5) 0px 0px 4px 0px;
  transition: all 0.2s ease-in 0s;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  &:hover {
    box-shadow: rgba(207, 207, 207, 0.6) 2px 2px 4px 2px;
  }

  .left .left-info-div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .left .left-info-div h1 {
    font-size: 19.6px;
    color: rgb(77, 88, 108);
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
  }
  .left .left-info-div .flex {
    display: flex;
    font-size: 12px;
    color: rgb(62, 174, 141);
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
  }

  .left .left-info-div .flex small {
    margin-right: 10px;
  }
  .right {
    width: 100%;
  }

  .right .right-info-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .right .right-info-div a {
    display: flex;
    font-size: 16px;
    color: rgb(62, 174, 141);
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
  }

  .right .right-info-div button {
    width: auto;
    font-size: 14px;
    font-weight: 800px;
    background: #e76f51;
    border: 1px solid #e76f51;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    padding: 0 1rem;
  }

  .right .right-info-div button:hover {
    box-shadow: #e76f51 0px 0px 4px 0;
  }

  .right .right-info-div a {
    cursor: pointer;
  }

  .right .right-info-div a:hover {
    text-decoration: underline;
  }
  @media (max-width: 769px) {
    .left .left-info-div h1 {
      font-size: 14px;
    }
    .right .right-info-div a {
      display: flex;
      font-size: 12px;
    }

    .right .right-info-div button {
      height: 20px;
      font-size: 12px;
    }

    .right .right-info-div button:hover {
      box-shadow: #e76f51 0px 0px 4px 0;
    }

    .right .right-info-div a {
      margin-top: 4px;
    }

    .right .right-info-div a:hover {
      text-decoration: underline;
    }
  }
`;

export const CollegeInfoCard = styled.div`
  max-width: 350px;
  max-height: 300px;
  position: relative;
  width: 100%;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  .college_img_wrapper {
    width: 100%;
    height: 150px;
    background: url("http://www.innovativegroupofcolleges.com/images/banner-img.jpg")
      center/cover;
    .bg_overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      position: relative;
    }
    img {
      width: 100px;
      height: 50px;
      object-fit: contain;
      position: absolute;
      top: 0;
      left: 0;
    }
    .college_name {
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      position: absolute;
      bottom: 4px;
      left: 8px;
    }
    small {
      color: #fff;
      font-size: 8px;
      position: absolute;
      bottom: 0;
      left: 8px;
    }
  }
  .college_info_wrapper {
    padding: 8px 0;
    .row {
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: space-around;
      p {
        color: #1d3557;
        font-size: 16px;
      }
    }
    .apply_now_button {
      display: flex;
      justify-content: flex-end;
      margin-right: 8px;
      margin-top: 1rem;
      button {
        outline: none;
        border: none;
        white-space: nowrap;
        appearance: button;
        transition: all 0.2s ease 0s;
        cursor: pointer;
        min-height: 40px;
        display: flex;
        padding: 0 20px;
        font-size: 14px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        background-color: rgb(30, 180, 212);
        border-radius: 4px;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
