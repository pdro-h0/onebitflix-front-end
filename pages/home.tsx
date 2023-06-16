import { FeaturedSession } from "@/components/HomeAuth/FeaturedSession";
import { NewestCategory } from "@/components/HomeAuth/NewestCategory";
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
      <NewestCategory />
      </main>
    </>
  );
};

export default HomeAuth;
