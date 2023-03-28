import React from "react";
import classes from "./User.module.css";
import { Component } from "react";

interface LoginProps {
  name: string;
}

class User extends Component<LoginProps> {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props: LoginProps) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
