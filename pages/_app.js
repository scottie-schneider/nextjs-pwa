import App, { Container } from 'next/app';
import Navbar from '../components/Navbar'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Navbar {...this.props} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;