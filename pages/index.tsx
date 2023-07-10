import { HeaderNoAuth } from "@/components/HomeNoAuth/HeaderNoAuth";
import { PresentationSection } from "@/components/HomeNoAuth/PresentationSection";
import { CardsSection } from "@/components/HomeNoAuth/CardsSection";
import { SlideSection } from "@/components/HomeNoAuth/SlideSection";
import { Footer } from "@/components/common/Footer";

import { CourseType, courseService } from "@/services/courseService";

import { GetStaticProps } from "next";
import { ReactNode, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../styles/HomeNoAuth.module.scss";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
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
        <div
          className={styles.sectionBackground}
          data-aos="fade-zoom-in"
          data-aos-duration="1600"
        >
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={course} />
        </div>
        <Footer />
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
    //revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;
