import React, { Component, PropTypes } from 'react';

const geoPropTypes = {
  onSend: PropTypes.func,
  currentAddress: PropTypes.string
};

class GeoLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        lat: '',
        lng: ''
      }
    };

    this.getLocation = this.getLocation.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    const { getLocation, handleSend } = this;
    console.log(this.props);
    getLocation();
    setTimeout(() => {
      handleSend();
    }, 1500);
  }

  getLocation() {
    if(!navigator.geolocation) {
      // *지오로케이션 지원하지 않는 브라우저
      console.log('geolocation not support');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords; // 좌표 얻기
      console.log('dsfdsfs' + position);
      this.setState({
        currentLocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      });
    }, err => {
      if(err) throw err;
    }, {enableHighAccuracy: true});
  }

  handleSend() {
    const { onSend } = this.props;
    const { currentLocation } = this.state;
    const latlng = `${currentLocation.lat}-${currentLocation.lng}`;
    console.log(latlng);
    onSend(latlng);
  }

  render() {
    const { currentAddress } = this.props;
    console.log(currentAddress);
    return (
      <div className="current-address">
        {currentAddress}
      </div>
    );
  }
}

GeoLocation.propTypes = geoPropTypes;

export default GeoLocation;
