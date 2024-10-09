import React from "react";
import { Button } from "..";
import { DOM } from "../../nanites";

const Menu = ({ children }) => {
  return (
    <DOM.StyledContainer
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {children}
    </DOM.StyledContainer>
  );
};

export default Menu;
