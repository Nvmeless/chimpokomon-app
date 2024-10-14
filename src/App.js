import React, { useState, useEffect, useMemo, Suspense, Profiler } from "react";
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
import useColorByBenjamin from "./hooks/useColorByBenjamin";
import useJinTheme from "./hooks/useTheme";
function App() {
  const [menu, setMenu] = useState("toto");
  const [isNight, setIsNight] = useState(false);
  // const [
  //   containerPrimary,
  //   containerSecondary,
  //   setContainerPrimary,
  //   setContainerSecondary,
  // ] = useColorByBenjamin({
  //   primary: "blue",
  //   secondary: "white",
  // });

  // const { primary, secondary, setPrimary, setSecondary } = useColorByBenjamin({
  //   primary: "blue",
  //   secondary: "white",
  // });

  const [containerColors, setContainerColors] = useColorByBenjamin({
    primary: "blue",
    secondary: "white",
  });
  const [colors, setColors] = useColorByBenjamin({
    primary: isNight ? "blue" : "magenta",
    secondary: isNight ? "green" : "red",
  });
  const [theme, setTheme] = useJinTheme({
    containers: containerColors,
    colors: colors,
  });

  const displayContent = useMemo(() => {
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
  }, [menu]);
  const changeNightTheme = () => {
    setIsNight(!isNight);
  };
  useEffect(() => {
    // console.log("THEME CHANGE");
    // setTheme({
    //   colors: {
    //     primary: isNight ? "black" : "white",
    //     secondary: isNight ? "white" : "black",
    //     containers: {
    //       primary: isNight ? "black" : "white",
    //       secondary: isNight ? "white" : "black",
    //     },
    //   },
    // });
  }, [!isNight]);

  return (
    <Profiler
      onRender={(
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime
      ) => {
        console.log(
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime
        );
      }}
    >
      <Suspense fallback={<>Loading</>}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <NightThemeProvider
              nightTheme={{
                toggleNightMode: changeNightTheme,
                isNight: isNight,
              }}
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
                {displayContent}
              </div>
            </NightThemeProvider>
          </ThemeProvider>
        </Provider>
      </Suspense>
    </Profiler>
  );
}

export default App;
