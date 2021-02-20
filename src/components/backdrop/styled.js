import styled from "styled-components";

export const BackdropDiv = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
