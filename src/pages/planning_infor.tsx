import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/common/Footer'
import Sns from '../components/common/Sns'
import Event_card from '../components/common/Event_card'
import Event_title from '../components/common/Event_title'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>第41回技大祭公式ホームページ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="nutfeslogo_white.png" />
        <link
          rel='stylesheet'
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap"
        />
      </Head>

      <Event_title/>
      <Event_card/>
      <Sns/>
      <Footer/>
    </>
  )
}

export default Home
