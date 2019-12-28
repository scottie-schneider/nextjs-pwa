// Note: we can read the signed cookie here because _document is only run on the server side 

import NextDocument, { Head, Main, NextScript } from "next/document";

import { getSessionFromServer, getUserScript } from "../lib/auth";
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'

class MyDocument extends NextDocument {
  static async getInitialProps (ctx) {
    const styledComponentSheet = new StyledComponentSheets()
    const originalRenderPage = ctx.renderPage
    let pageContext;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => {
            pageContext = props.pageContext;
            return styledComponentSheet.collectStyles(<App {...props} />)
          }          
        })

      const initialProps = await NextDocument.getInitialProps(ctx)
      const user = getSessionFromServer(ctx.req);
      return {
        ...initialProps,
        ...user,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    const { pageContext, user = {} } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          {/* You can use the head tag, just not for setting <title> as it leads to unexpected behavior */}          
          <meta name="description" content="A Next PWA example app" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="manifest" href="/static/manifest.webmanifest" />

          <meta name="theme-color" content="#ff6600" />
          <link rel="shortcut icon" href="/static/icon.png" />
          <link rel="apple-touch-icon" href="/static/icon.png" />
          <meta name="apple-mobile-web-app-title" content="Hacker News" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
