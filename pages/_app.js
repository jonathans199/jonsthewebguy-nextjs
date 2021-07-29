import React from 'react'
import Head from 'next/head'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'styles/tailwind.css'


export default function App(props) {
  const { Component, pageProps } = props

  const Layout = Component.layout || (({ children }) => <>{children}</>)

  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>JonS the Web Guy</title>
        <script src='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

// export async function getInitialProps({ Component, ctx }) {
//   let pageProps = {}

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }

//   return { pageProps }
// }
