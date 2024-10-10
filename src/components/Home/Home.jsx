import { Text } from "../atoms";
import { Card } from "../atoms/Container";
import * as style from "./Home.module.css";

import React from "react";
import { Nes } from "../molecules";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  componentDidMount() {
    // console.log("Home");
  }

  componentWillUnmount() {
    // console.log("Bye Bye Home");
  }
  componentDidUpdate() {
    // console.log("Update");
  }
  render() {
    return (
      <div>
        <Card>{this.props.message}</Card>
        <Nes.Container>
          <Text.Paragraph>Hi</Text.Paragraph>
        </Nes.Container>
      </div>
    );
  }
}
