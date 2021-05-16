import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  .info_wrapper {
    padding: 0 2rem;
    section {
      text-align: center;
      padding: 2rem 0;
      .sub-heading {
        font-size: 32px;
        color: #000;
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
      }
      .about-clg {
        text-align: center;
        font-size: 18px;
        color: #000;
        font-weight: 400;
        margin-bottom: 46px;
      }
    }
  }
  @media (max-width: 769px) {
    .info_wrapper {
      section {
        .sub-heading {
          font-size: 24px;
        }
        .about-clg {
          font-size: 14px;
        }
      }
    }
  }
`;

export const TabWrapper = styled.div`
  background: #fff;
  position: sticky;
  box-shadow: 0 2px 5px 0 #9e9e9e;

  top: 0;
  z-index: 5;
  @media (min-width: 769px) {
    top: 64px;
  }
  .tabOptions {
    position: relative;
    .scrollBtn {
      position: absolute;
      padding: 8px;
      cursor: pointer;
      z-index: 4;
      margin: 0 -8px;
      top: 0;
      background: #fff;
    }

    .scrollLeftBtn {
      left: 8px;
    }
    .scrollRightBtn {
      right: 8px;
    }
    .tab {
      position: relative;
      overflow: auto;
      width: 95%;
      scrollbar-width: none;
      margin: 0 auto;
      padding-left: 10px;
      ul {
        width: max-content;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
        padding-left: 8px;
      }
      li {
        list-style: none;
        font-size: 16px;
        padding: 8px;
        margin-right: 28px;
        .activeHash {
          border-bottom: 2px solid rgb(122, 182, 211);
          color: rgb(122, 182, 211);
          padding-bottom: 4px;
          &:after,
          &:before {
            content: none;
          }
          &:hover {
            &:after {
              content: none;
            }
          }
        }
        a {
          position: relative;
          text-decoration: none;
          color: #323c4f;
          padding: 4px 0;
          &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 0%;
            content: "";
            color: rgb(122, 182, 211);
            background: rgb(122, 182, 211);
            height: 2px;
          }
          &:hover {
            color: rgb(122, 182, 211);
            &:after {
              width: 100%;
            }
          }
        }
        a,
        a:before,
        a:after {
          transition: all 560ms;
        }
      }
      @media (min-width: 769px) {
        padding-right: 4rem;
        ul {
          padding-right: 4rem;
        }
        li {
          font-size: 18px;
        }
      }
    }
  }
`;
