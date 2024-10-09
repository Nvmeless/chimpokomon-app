import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
// import { Title, Paragraph } from "./components/atoms/Text";
import { Text, Button, Container } from "./components/atoms";
import { Menu } from "./components/molecules";

import { NightThemeProvider } from "./providers/NightThemeProvider";
import { ThemeProvider } from "styled-components";
function App() {
  const [menu, setMenu] = useState("toto");
  const [isNight, setIsNight] = useState(false);
  const displayContent = () => {
    switch (menu) {
      case "profile":
        return <Home message="Profil"></Home>;
        break;
      case "home":
      default:
        return <Home message="Home"></Home>;
        break;
    }
  };

  const changeNightTheme = () => {
    setIsNight(!isNight);
  };

  return (
    <ThemeProvider
      theme={{
        colors: { primary: "red" },
      }}
    >
      <NightThemeProvider
        nightTheme={{ toggleNightMode: changeNightTheme, isNight: isNight }}
      >
        <div
          className="App"
          style={{
            background: isNight ? "black" : "white",
            color: isNight ? "white" : "black",
          }}
        >
          <Menu
            onMenuChange={(arg) => {
              setMenu(arg);
            }}
            configs={[
              { displayName: "Profile", slug: "profile" },
              { displayName: "Home", slug: "home" },
              { displayName: "Contact", slug: "contact" },
            ]}
          ></Menu>
          {displayContent()}
        </div>
      </NightThemeProvider>
    </ThemeProvider>
  );
}

export default App;
