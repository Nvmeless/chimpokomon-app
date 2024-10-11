import React, { useContext } from "react";
import { DOM } from "../../nanites";

const Base = ({ ...props }) => {
  return (
    <DOM.StyledButton
      {...props}
    ></DOM.StyledButton>
  );
};

export default Base;
