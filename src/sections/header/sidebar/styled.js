import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  display: ${(props) => (props.show ? "block" : "none")};
  height: 100%;
  width: 70%;
  max-width: 400px;
  background: #fff;
  box-shadow: 2px 0 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: translateX(-100%);
  ${(props) =>
    props.show &&
    css`
      transform: translateX(0);
    `};
  transition: transform 0.4s ease-out;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    margin: 0;
  }
  li {
    margin: 0.5rem;
  }
  .link {
    color: #555b6e;
    font-size: 18px;
    text-decoration: none;
  }
  .link:hover {
    text-decoration: underline;
  }

  .close-sidebar {
    position: absolute;
    text-align: center;
    top: 12px;
    right: 12px;
    cursor: pointer;
    .close-icon {
      color: #000;
      font-size: 1.5rem;
    }
    &:hover {
      .close-icon {
        color: #c19277;
      }
    }
  }
`;
