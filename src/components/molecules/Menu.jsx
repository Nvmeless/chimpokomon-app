import React, { useState } from "react";
import { Button, Container, Text } from "../atoms";

const Menu = ({ configs, onMenuChange = (arg) => {} }) => {
  return (
    <Container.Menu>
      {configs.map((config, i) => {
        return (
          <Button.Base
            onClick={() => {
              onMenuChange(config.slug);
            }}
            key={i}
          >
            <Text.Paragraph rounded>{config.displayName}</Text.Paragraph>
          </Button.Base>
        );
      })}
    </Container.Menu>
  );
};

export default Menu;
