import React, { Component } from 'react';

const keys = {
  ENTER: 13
};

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: ''
    };

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
  //  this._input.focus();
  }

  handleChange(e) {
    this.setState({
      keywords: e.target.value
    });
  }

  onInputFocus(e) {
    e.target.parentNode.classList.add('input--filled');
  }

  onInputBlur(e) {
    if(e.target.value === '') {
      e.target.parentNode.classList.remove('input--filled');
    }
  }

  handleKeyPress(e) {
    const { handleSend } = this;
    if(e.charCode === keys.ENTER) {
      handleSend();
    }
  }

  handleSend() {
    const { onSend } = this.props;
    const { keywords } = this.state;

    let searchWrapper = document.querySelector('.search-list-wrapper');
    searchWrapper.classList.add('show');
    if(keywords !== '') {
      onSend(keywords);
    }
  }

  render() {
    const { keywords } = this.state;
    const { onInputFocus, onInputBlur, handleChange, handleKeyPress, handleSend } = this;
    console.log(this.props);
    return (
      <div className="search-box">
        <fieldset className="input input--hoshi input-search">
        <input type="text"
               id="search-input"
               className="input__field input--hoshi input__field--hoshi"
               onChange={handleChange}
               onFocus={onInputFocus}
               onBlur={onInputBlur}
               value={keywords}
               onKeyPress={handleKeyPress}
               ref={(i) => {this._input = i}}
        />
      <button type="submit"
                className="search-send"
                onClick={handleSend}
        ></button>
        <label htmlFor="search-input" className="input__label input__label--hoshi input__label--hoshi-color-2">
          <span className="input__label-content input__label-content--hoshi">Search</span>
        </label>
      </fieldset>

      </div>
    );
  }
}

export default SearchBox;
