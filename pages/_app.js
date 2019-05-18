import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import '@styles/styles.css'

export default class CustomApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Myoozik</title>
        </Head>

        <Component {...pageProps} />
      </Container>
    )
  }
}
