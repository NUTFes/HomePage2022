import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/common/Footer";
import Sns from "../components/common/Sns";
import Group_title from "../components/common/Group_title ";
import Group_card from "../components/common/Group_card";
import Group_courus from "../components/common/Group_courus";
import StreetStyle from "../components/common/StreetStyle";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>第41回技大祭公式ホームページ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="nutfeslogo_white.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap"
        />
      </Head>
      <Group_title />
      <Group_courus/>
      <StreetStyle/>
      

      <Sns />
      <Footer />
    </>
  );
};

export default Home;
