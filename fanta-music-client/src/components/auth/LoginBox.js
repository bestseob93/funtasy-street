import React, { Component } from 'react';

class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.state= {
      username: '',
      password: ''
    };

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onInputFocus(e) {
    e.target.parentNode.classList.add('input--filled');
  }

  onInputBlur(e) {
    if(e.target.value === '') {
      e.target.parentNode.classList.remove('input--filled');
    }
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const { username, password } = this.state;
    onSubmit(username, password);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const { onInputFocus, onInputBlur, handleSubmit, handleChange } = this;
    return (
      <div className="app-container teal">
        <h3 className="auth-title center">FANTA-MUSIC</h3>
          <div className="auth-container white">
              <fieldset className="input input--hoshi">
                <input onFocus={onInputFocus}
                       onBlur={onInputBlur}
                       onChange={handleChange}
                       id="login-username"
                       type="text"
                       name="username"
                       className="input__field input--hoshi input__field--hoshi"/>
                <label htmlFor="login-username" className="input__label input__label--hoshi input__label--hoshi-color-2">
                  <span className="input__label-content input__label-content--hoshi">username</span>
                </label>
              </fieldset>

              <fieldset className="input input--hoshi">
                <input onFocus={onInputFocus}
                       onBlur={onInputBlur}
                       onChange={handleChange}
                       id="login-password"
                       type="password"
                       name="password"
                       className="input__field input--hoshi input__field--hoshi"/>
                <label htmlFor="login-password" className="input__label input__label--hoshi input__label--hoshi-color-1">
                  <span className="input__label-content input__label-content--hoshi">password</span>
                </label>
              </fieldset>
              <a href="http://localhost:4000/api/v1/account/kakao">
                <img alt="카카오톡 로그인" src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"/>
              </a>
              <a href="http://localhost:4000/api/v1/account/facebook">
                <img alt="페이스북 로그인" src="http://guruble.com/wp-content/uploads/2014/05/FBloginbutton.png"/>
              </a>
              <button onClick={handleSubmit} type="submit">로그인</button>

          </div>
      </div>
    );
  }
}

export default LoginBox;
