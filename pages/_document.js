// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document  from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet();
//     const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
//     const styleTags = sheet.getStyleElement();
//     const initialProps = await Document.getInitialProps(ctx)
//     return {...initialProps, ...page, styleTags };
//   }

//   render() {
//     return (
//       <html>
//         <Head>
//           {this.props.styleTags}           
//           <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWAvPfvYStM_QGVqo36vo3d2g3OOOEziY&libraries=places"></script>          
//         </Head>
//         <body className="sidebar-mini">
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }

// export default MyDocument