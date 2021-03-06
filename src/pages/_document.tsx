import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='pt'>
        <Head />
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