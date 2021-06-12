import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  .info_wrapper {
    padding: 0 2rem;
    section {
      text-align: justify;
      .fee-details {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 33px 30px;
        table {
          border-spacing: 1;
          border-collapse: collapse;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          width: 100%;
          margin: 0 auto;
          position: relative;
        }
        table * {
          position: relative;
        }
        table td,
        table th {
          padding-left: 8px;
        }
        table thead tr {
          height: 60px;
          background: #36304a;
        }
        table tbody tr {
          height: 50px;
        }
        table tbody tr:last-child {
          border: 0;
        }
        table td,
        table th {
          text-align: left;
        }
        table td.l,
        table th.l {
          text-align: right;
        }
        table td.c,
        table th.c {
          text-align: center;
        }
        table td.r,
        table th.r {
          text-align: center;
        }

        .table100-head th {
          font-family: OpenSans-Regular;
          font-size: 18px;
          color: #fff;
          line-height: 1.2;
          font-weight: unset;
        }

        tbody tr:nth-child(even) {
          background-color: #f5f5f5;
        }

        tbody tr {
          font-family: OpenSans-Regular;
          font-size: 15px;
          color: #808080;
          line-height: 1.2;
          font-weight: unset;
        }

        tbody tr:hover {
          color: #555555;
          background-color: #f5f5f5;
          cursor: pointer;
        }

        .column1 {
          width: 260px;
          padding-left: 40px;
        }

        .column2 {
          width: 100px;
        }

        .column3 {
          width: 50px;
        }

        .column4 {
          width: 300px;
          text-align: left;
          padding-right: 62px;
        }

        @media screen and (max-width: 992px) {
          padding: 0;
          table {
            display: block;
          }
          table > *,
          table tr,
          table td,
          table th {
            display: block;
          }
          table thead {
            display: none;
          }
          table tbody tr {
            height: auto;
            padding: 37px 0;
            margin-bottom: 1rem;
          }
          table tbody tr td {
            padding-left: 40% !important;
            margin-bottom: 24px;
          }
          table tbody tr td:last-child {
            margin-bottom: 0;
          }
          table tbody tr td:before {
            font-family: OpenSans-Regular;
            font-size: 14px;
            color: #999999;
            line-height: 1.2;
            font-weight: unset;
            position: absolute;
            width: 40%;
            left: 30px;
            top: 0;
          }

          table tbody tr td:nth-child(1):before {
            content: "Course";
          }
          table tbody tr td:nth-child(2):before {
            content: "Fees(yearly)";
          }
          table tbody tr td:nth-child(3):before {
            content: "duration";
          }
          table tbody tr td:nth-child(4):before {
            content: "Eligibility";
          }

          .column4,
          .column5,
          .column6 {
            text-align: left;
          }

          .column4,
          .column5,
          .column6,
          .column1,
          .column2,
          .column3 {
            width: 100%;
          }

          tbody tr {
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .container-table100 {
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      }
      .grid-view {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
      .image-category {
        margin-bottom: 2rem;
      }
      .image-category-head {
        font-size: 24px;
        font-weight: 600px;
        text-align: left;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      .img-wrap {
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 4px;
      }
      .gallery-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 650ms;
        &:hover {
          transform: scale(1.05);
        }
      }
      padding: 2rem 0;
      .sub-heading {
        font-size: 32px;
        color: #000;
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
      }
      .about-clg {
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
        .grid-view {
          grid-template-columns: repeat(1, 1fr);
        }
        .img-wrap {
          width: 100%;
          height: 200px;
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
