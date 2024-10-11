import React, { useContext } from "react";
import { DOM } from "../../nanites";
import { NightThemeProviderContext } from "../../../providers/NightThemeProvider";

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
