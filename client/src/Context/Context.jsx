import React, { Component } from "react";

const stateContext = React.createContext();

export class StateProvider extends Component {
  state = {
    post: [],
    user: [],
  };

  handlePosts = (post) => {
    this.setState({ post });
  };
  handleUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { post, user } = this.state;
    const { handlePosts, handleUser } = this;

    return (
      <stateContext.Provider
        value={{
          post,
          user,
          handlePosts,
          handleUser,
        }}
      >
        {this.props.children}
      </stateContext.Provider>
    );
  }
}

export default stateContext;
