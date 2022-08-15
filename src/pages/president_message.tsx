import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/common/Footer'
import PresidentMessageTitle from '../components/common/PresidentMessageTitle'
import Sns from '../components/common/Sns'

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
      <PresidentMessageTitle/>
      <Sns/>
      <Footer/>
    </>
  )
}

export default Home