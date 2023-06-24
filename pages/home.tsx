import { FavoriteCategory } from "@/components/HomeAuth/FavoriteCategory";
import { FeaturedCategory } from "@/components/HomeAuth/FeaturedCategory";
import { FeaturedSession } from "@/components/HomeAuth/FeaturedSession";
import { ListCategories } from "@/components/HomeAuth/ListCategories";
import { NewestCategory } from "@/components/HomeAuth/NewestCategory";
import { Footer } from "@/components/common/Footer";
import { PageSpinner } from "@/components/common/Spinner";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const HomeAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

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
      <Footer />
      </main>
    </>
  );
};

export default HomeAuth;
