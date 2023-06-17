import { FavoriteCategory } from "@/components/HomeAuth/FavoriteCategory";
import { FeaturedCategory } from "@/components/HomeAuth/FeaturedCategory";
import { FeaturedSession } from "@/components/HomeAuth/FeaturedSession";
import { ListCategories } from "@/components/HomeAuth/ListCategories";
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
      <FavoriteCategory />
      <FeaturedCategory />
      <ListCategories />
      </main>
    </>
  );
};

export default HomeAuth;
