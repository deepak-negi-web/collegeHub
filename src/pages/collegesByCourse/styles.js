import styled from "styled-components";

export const Wrap = styled.div`
  padding: 1rem 2rem;
  .section_header {
    text-align: center;
    padding-top: 32px;
  }
  .section_header h3 {
    font-size: 35px;
    color: #48639e;
    font-weight: 900;
    margin-bottom: 5px;
  }
  .section_header p {
    line-height: 1.4;
    color: #9d9d9d;
    font-weight: 400;
  }
  .cards_wrapper {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    .empty_fallback {
      text-align: center;
      margin-top: 10%;
      height: 100%;
    }
    @media (max-width: 769px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
