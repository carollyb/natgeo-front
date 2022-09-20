import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='pt'>
        <Head>
          <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Sen&display=swap"
          rel="stylesheet"
          />
        </Head>
        <meta 
        title='National Geographic'
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}