import { HeaderAuth } from "@/components/common/HeaderAuth";
import { CourseType, courseService } from "@/services/courseService";

import styles from "../../styles/coursePage.module.scss";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const CoursePage = () => {
  const [course, setCourse] = useState<CourseType>();

  const router = useRouter();
  const { id } = router.query;

  const getCourse = async () => {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
	getCourse();
}, [id]);

  return (
    <>
      <Head>
        <title>Onebitflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        <p>{course?.name}</p>
      </main>
    </>
  );
};

export default CoursePage;
