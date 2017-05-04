import React, { Component } from 'react';
import { SearchBox, SearchListBox } from 'components';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleHide = this.handleHide.bind(this);
  }

  handleHide() {
    document.querySelector('.search-list-wrapper').classList.remove('show');
  }

  render() {

    const { onSend, onUrlSend, data, isFetching } = this.props;
    const { handleHide } = this;

    console.log(this.props.isFetching);
    return (
      <nav>
        <ul>
          <SearchBox onSend={onSend}/>
        </ul>
        <div ref={(closer) => {this.searchClose = closer}}
             className="search-list-wrapper">
            { isFetching ? (<span className="red-text">Loading....</span>) : <SearchListBox onSend={onUrlSend} onHide={handleHide} data={data}/>}
          <div className="serach-list-box-footer"
               onClick={handleHide}>닫기
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
