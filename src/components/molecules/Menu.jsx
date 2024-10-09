import React, { useState } from "react";
import { Button, Container } from "../atoms";

const Menu = ({ configs, onMenuChange = (arg) => {} }) => {
  return (
    <Container.Menu>
      {configs.map((config, i) => {
        return (
          <Button.Base
            onClick={() => {
              console.log(config);
              onMenuChange(config.slug);
            }}
            key={i}
          >
            {config.displayName}
          </Button.Base>
        );
      })}
    </Container.Menu>
  );
};

export default Menu;
