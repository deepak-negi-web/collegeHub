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
