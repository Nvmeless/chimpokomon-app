import React, { createContext } from "react";

const NightThemeProviderContext = createContext(null);

const NightThemeProvider = ({ nightTheme, ...props }) => {
  return (
    <NightThemeProviderContext.Provider
      value={nightTheme}
      {...props}
    ></NightThemeProviderContext.Provider>
  );
};

export { NightThemeProviderContext, NightThemeProvider };
