import React, { Component, PropTypes } from 'react';

const itemPropTypes = {
  data: PropTypes.object,
  onHide: PropTypes.func,
  onSend: PropTypes.func
};

class SearchListItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      const { onHide, onSend, data } = this.props;
      onHide();
      onSend(data.stream_url);
  }

  render() {
    console.log(this.props.data);
    const { handleClick } = this;
    const { data } = this.props;
    return (
      <a onClick={handleClick} className="search-item">
        <div className="search-item-detail search-item-artwork">
        <img alt={data.title} src={data.artwork_url}/>
        </div>
        <div className="search-item-detail search-item-user">
          {data.user.username}
        </div>
        <div className="search-item-detail search-item-title">
          {data.title}
        </div>
        <div className="search-item-detail search-item-likes">
          {data.likes_count}
        </div>
        <div className="search-item-detail search-item-plays">
          {data.playback_count}
        </div>
      </a>
    );
  }
}

SearchListItem.propTypes = itemPropTypes;

class SearchListBox extends Component {
  constructor(props) {
    super(props);

    this.mapToItems = this.mapToItems.bind(this);
  }

  mapToItems(data) {
    const { onHide, onSend } = this.props;
    const searchItem = data.map((item) => (
      <SearchListItem onSend={onSend} onHide={onHide} data={item} key={item.id}/>
    ));

    return searchItem;
  }

  render() {
    const { data } = this.props;
    const { mapToItems } = this;
    console.log(this.props);
    return (
      <div className="search-list-box">
        {mapToItems(data)}
      </div>
    );
  }
}



export default SearchListBox;
