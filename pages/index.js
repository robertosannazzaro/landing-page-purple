import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SplashScreen from '../sections/SplashScreen'
import Facts from '../sections/Facts'
import Newsletter from '../sections/Newsletter'

export default function Home() {
  return (
    <div className='max-w mx-auto bg-gradient-to-b from-purple-light to-purple-dark'>
      <Head>
        <title>DeepLabs</title>
        <link rel="icon" href="/favicon.png" />

      </Head>

      <main>

        <Navbar />
        <SplashScreen />
        <Facts />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}
