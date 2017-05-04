import React, { Component } from 'react';
import { GeoLocation } from 'components';

class Footer extends Component {
  render() {
    const { onGeocode, currentAddress } = this.props;
    console.log(this.props);
    return (
      <footer id="footer">
        <GeoLocation currentAddress={currentAddress} onSend={onGeocode}/>
    </footer>
    );
  }
}

export default Footer;
