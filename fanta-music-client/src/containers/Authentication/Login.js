import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { localLogin } from 'ducks/auth.duck';

import { LoginBox } from 'components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password) {
    const { AuthActions } = this.props;
    AuthActions.localLogin(username, password);
    console.log(username, password);
  }

  render() {
    const { handleSubmit } = this;
    console.log(this.props);
    return (
      <LoginBox onSubmit={handleSubmit}/>
    );
  }
}

export default connect(
  state => {
    return {
      isFetching: state.auth.request.fetching,
      isLogged: state.auth.authStatus.logged
    };
  },
  dispatch => ({
    AuthActions: bindActionCreators({ localLogin }, dispatch)
  })
)(Login);
