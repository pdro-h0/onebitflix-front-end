import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import { HeaderNoAuth } from "@/components/HeaderNotAuth";
import { PresentationSection } from "@/components/PresentationSection";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
      </main>
    </>
  );
};

export default HomeNoAuth;
