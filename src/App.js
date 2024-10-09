import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
// import { Title, Paragraph } from "./components/atoms/Text";
import { Text, Button, Container } from "./components/atoms";
import { Menu } from "./components/molecules";
function App() {
  const [menu, setMenu] = useState("toto");

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
  return (
    <div className="App">
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
  );
}

export default App;
