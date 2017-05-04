import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Footer } from 'components';
import { Home } from 'containers';

import * as search from 'ducks/search.duck';
import * as geo from 'ducks/geo.duck';
class App extends Component {
  constructor(props) {
    super(props);

    this.handleSend = this.handleSend.bind(this);
    this.handleUrlSend = this.handleUrlSend.bind(this);
    this.handleGeocode = this.handleGeocode.bind(this);
  }

  handleSend(keywords) {
    const { SearchActions } = this.props;
    SearchActions.requestSearch(keywords);
  }

  handleUrlSend(url) {
    const { SearchActions } = this.props;
    SearchActions.requestStream(url);
  }

  handleGeocode(latlng) {
    const { GeoActions } = this.props;
    GeoActions.requestGeoLocation(latlng);
  }



  render() {
    const { handleSend, handleUrlSend, handleGeocode } = this;
    const { searchData, isFetching, streamUrl, geoFetching, geoAddress } = this.props;

    return (
      <div className="app-container">
        <header>
          <Header isFetching={isFetching} onUrlSend={handleUrlSend} onSend={handleSend} data={searchData.result}/>
        </header>
        <main>
          {this.props.location.pathname === '/' ? (<Home url={streamUrl}/>): this.props.children}
        </main>
          <Footer currentAddress={geoAddress.currentAddress} onGeocode={handleGeocode}/>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      searchData: {
        result: state.search.searchResults.result
      },
      searchFetching: state.search.request.fetching,
      streamUrl: state.search.streamUrl,
      geoFetching: state.geo.request.fetching,
      geoAddress: {
        currentAddress: state.geo.currentAddress
      }
    };
  },
  dispatch => {
    return {
      SearchActions: bindActionCreators({
        requestSearch: search.requestSearchResults,
        requestStream: search.requestStreamUrl
      }, dispatch),
      GeoActions: bindActionCreators({
        requestGeoLocation: geo.requestGeocode
      }, dispatch)
    };
  }
)(App);
