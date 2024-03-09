import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // You can log the error to a logging service here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the fallback UI here
      return <div>Something went wrong!</div>;
    }

    return this.props.children;
  }
}


const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route doesn't exist</h1>
            <NavLink to='/'>
                You can go back to the homepage by clicking here, though!
            </NavLink>
        </div>
    );
}

export { ErrorBoundary, ErrorPage };