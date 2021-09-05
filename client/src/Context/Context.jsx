import React, { Component } from "react";

const stateContext = React.createContext();

export class StateProvider extends Component {
  state = {
    post: [],
    user: [],
    userName: null,
    userId: null,
    Email: null,
    Password: null,
    Gender: null,
    UIDNumber: null,
    DateofBirth: null,
  };

  handlePosts = (post) => {
    this.setState({ post });
  };
  handleUser = (user) => {
    this.setState({ user });
  };

  handleuserName = (userName) => {
    this.setState({ userName });
  };

  handleuserId = (userId) => {
    this.setState({ userId });
  };

  handleEmail = (Email) => {
    this.setState({ Email });
  };

  handlePassword = (Password) => {
    this.setState({ Password });
  };

  render() {
    const { post, user, userName, userId, Email, Password } = this.state;
    const {
      handlePosts,
      handleUser,
      handleuserName,
      handleuserId,
      handleEmail,
      handlePassword,
    } = this;

    return (
      <stateContext.Provider
        value={{
          post,
          user,
          userName,
          userId,
          Email,
          Password,
          handlePosts,
          handleUser,
          handleuserName,
          handleuserId,
          handleEmail,
          handlePassword,
        }}
      >
        {this.props.children}
      </stateContext.Provider>
    );
  }
}

export default stateContext;
