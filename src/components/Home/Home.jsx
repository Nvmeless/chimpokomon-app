import { Card } from "../atoms/Container";
import * as style from "./Home.module.css";
import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Card >{this.props.message}</Card>
      </div>
    );
  }
}
