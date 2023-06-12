import { HeaderNoAuth } from "@/components/HomeNoAuth/HeaderNoAuth";
import { PresentationSection } from "@/components/HomeNoAuth/PresentationSection";
import { CardsSection } from "@/components/HomeNoAuth/CardsSection";
import { SlideSection } from "@/components/HomeNoAuth/SlideSection";
import { CourseType, courseService } from "@/services/courseService";

import { GetStaticProps } from "next";
import { ReactNode } from "react";
import Head from "next/head";

import styles from "../styles/HomeNoAuth.module.scss";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."
        ></meta>
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={course} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewsestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;
