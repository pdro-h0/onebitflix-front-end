import { HeaderAuth } from "@/components/common/HeaderAuth";
import { CourseType, courseService } from "@/services/courseService";

import styles from "../styles/search.module.scss";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { SearchCard } from "@/components/SearchCard";
import { Footer } from "@/components/common/Footer";

const Search = () => {
  const router = useRouter();
  const searchName: any = router.query.name;

  const [searchResult, setSearchResult] = useState<CourseType[]>([]);

  const searchCourses = async () => {
    const res = await courseService.getSearch(searchName);

    setSearchResult(res.data.courses);
  };

  useEffect(() => {
    searchCourses();
  }, [searchName]);
  return (
    <>
      <Head>
        <title>Onebitflix - {searchName}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headerFooterBg}>
          <HeaderAuth />
        </div>

        {searchResult.length >= 1 ? (
          <div className={styles.searchContainer}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
              {searchResult?.map((item) => {
                return <SearchCard key={item.id} course={item} />;
              })}
            </Container>
          </div>
        ) : (
          <div className={styles.searchContainer}>
            <p className={styles.noSearchText}>Nenhum resultado encontrado!</p>
          </div>
        )}

        <div className={styles.headerFooterBg}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;
