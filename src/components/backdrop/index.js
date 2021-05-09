import React from "react";
import { BackdropDiv } from "./styled";

export default function Backdrop({ show, close }) {
  return <BackdropDiv show={show} onClick={close} />;
}
