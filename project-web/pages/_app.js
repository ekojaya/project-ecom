import React from 'react';
import App, { Container } from 'next/app';

class CoreApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ?
      await Component.getInitialProps(ctx) :
      {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps}/>
      </Container>
    );
  }
}

function withHook(Component) {
  return function WrappedComponent(props) {
    return (
      <Component {...props}/>
    );
  }
}


export default withHook(CoreApp);
