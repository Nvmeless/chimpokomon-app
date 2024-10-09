import React, { useContext } from "react";
import { Button } from "..";
import { DOM } from "../../nanites";
import { NightThemeProviderContext } from "../../../providers/NightThemeProvider";

const Menu = ({ children }) => {
  const context = useContext(NightThemeProviderContext);

  return (
    <DOM.StyledContainer
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
      onClick={() => {
        context.toggleNightMode();
      }}
    >
      {children}
    </DOM.StyledContainer>
  );
};

export default Menu;
