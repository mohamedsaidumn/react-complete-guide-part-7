import React from "react";
import classes from "./User.module.css";

interface LoginProps {
  name: string;
}

const User = (props: LoginProps) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
