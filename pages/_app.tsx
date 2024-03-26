import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>xlynxx.xyz</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=block" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
