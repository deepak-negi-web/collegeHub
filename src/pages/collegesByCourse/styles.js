import styled from "styled-components";

export const Wrap = styled.div`
  padding: 1rem;
  height: calc(100vh - 64px);
  .cards_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1rem;
    .empty_fallback {
      text-align: center;
      margin-top: 10%;
      height: 100%;
    }
  }
`;
