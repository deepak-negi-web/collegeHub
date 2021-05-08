import styled from "styled-components";

export const Wrap = styled.div`
  padding: 1rem;
  .cards_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1rem;
  }
`;
