import { FeaturedSession } from "@/components/HomeAuth/FeaturedSession";
import Head from "next/head";

const HomeAuth = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <main>
      <FeaturedSession />
      </main>
    </>
  );
};

export default HomeAuth;
