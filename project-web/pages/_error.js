import React, { Component, Fragment } from 'react';
import ErrorContent from '../components/ErrorContent';

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ?
      res.statusCode :
      err ?
        err.statusCode :
        null;

    return { statusCode };
  }

  render() {
    const {
      statusCode,
    } = this.props;

    const message = !statusCode ?
      // 404 request
      'We could not find your page' :
      // 500 or else request
      `An error with code: ${statusCode} occured on the server.`;
    
    return (
      <ErrorContent message={message}/>
    );
  }
}

export default Error;
