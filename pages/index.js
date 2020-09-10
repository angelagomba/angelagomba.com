import About from '../components/About/index.js'
import Head from 'next/head'
import Header from '../components/Header/index.js'
import Portfolios from '../components/Portfolios/index.js'
import styles from '../styles/index.module.css'

import { Link } from 'react-scroll'

export default function Home() {
  return (
    <body className={styles.page}>
      <Head>
      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-3BN96H4GKH`}
        />
        <script
          dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3BN96H4GKH');
          `,
          }}
        />
        <title>Angela Gomba</title>
        <meta name="viewport" content="initial-scale=0.5, width=device-width" />
        <link rel="icon" href="/keroppi.png" />
      </Head>

      <div className={styles.header}>
        <span>
          <Header />
          <Link to="about" smooth={true} duration={1000}>
            <span className={styles.button}>
              <h1 className={styles.text}>Learn More</h1>
            </span>
          </Link>
        </span>
      </div>

      <div id='about'>
        <About />
      </div>

      <div id='about'>
        <Portfolios />
      </div>
    </body>
  )
}
