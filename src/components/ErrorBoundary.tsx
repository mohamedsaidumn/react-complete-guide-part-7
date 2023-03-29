import React, { ReactNode, Component } from "react";

interface LoginProps {
  children: ReactNode;
}

interface LoginStates {
  hasError: ReactNode;
}
class ErrorBoundary extends Component<LoginProps, LoginStates> {
  constructor(props: LoginProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
