import styled from "styled-components";

export const Wrapper = styled.div`
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
  .card-wrapper {
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    max-width: 1024px;
    margin: 0 auto;
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
