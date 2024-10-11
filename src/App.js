import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Title, Paragraph } from "./components/atoms/Text";
import { Text, Button, Container } from "./components/atoms";
import { Menu } from "./components/molecules";
import { store } from "./store";
import { NightThemeProvider } from "./providers/NightThemeProvider";
import { ThemeProvider } from "styled-components";
import Profile from "./components/pages/Profile";
import Contact from "./components/pages/Contact";
import { Provider } from "react-redux";
import FontAwesome from "./components/atoms/Icons/FontAwesome";
function App() {
  const [menu, setMenu] = useState("toto");
  const [isNight, setIsNight] = useState(false);
  const [theme, setTheme] = useState({
    colors: {
      primary: isNight ? "black" : "white",
      secondary: isNight ? "white" : "black",
      containers: {
        primary: isNight ? "black" : "white",
        secondary: isNight ? "white" : "black",
      },
    },
  });
  const displayContent = () => {
    switch (menu) {
      case "contact":
        return <Contact message="Profil"></Contact>;
        break;
      case "profile":
        return <Profile message="Profil"></Profile>;
        break;
      case "home":
      default:
        // return <Home message="Home"></Home>;
        break;
    }
  };

  const changeNightTheme = () => {
    setIsNight(!isNight);
  };
  useEffect(() => {
    // console.log("THEME CHANGE");
    setTheme({
      colors: {
        primary: isNight ? "black" : "white",
        secondary: isNight ? "white" : "black",
        containers: {
          primary: isNight ? "black" : "white",
          secondary: isNight ? "white" : "black",
        },
      },
    });
  }, [!isNight]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
            <Button.NightSwitch></Button.NightSwitch>
            {displayContent()}
          </div>
        </NightThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
