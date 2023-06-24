import { HeaderAuth } from "@/components/common/HeaderAuth";
import { CourseType, courseService } from "@/services/courseService";

import styles from "../../styles/coursePage.module.scss";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import { PageSpinner } from "@/components/common/Spinner";
import { EpisodeList } from "@/components/EpisodeList";
import { Footer } from "@/components/common/Footer";

  const CoursePage = () => {
  const [course, setCourse] = useState<CourseType>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  const router = useRouter();
  const { id } = router.query;

  const getCourse = async () => {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);

    if (res.status === 200) {
      setCourse(res.data);
      setIsLiked(res.data.liked);
      setIsFavorited(res.data.favorited);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  const handleLikeCourse = async () => {
    if (typeof id !== "string") return;

    if (isLiked === true) {
      await courseService.removeLike(id);
      setIsLiked(false);
    } else {
      await courseService.like(id);
      setIsLiked(true);
    }
  };

  const handleFavCourse = async () => {
    if (typeof id !== "string") return;

    if (isFavorited === true) {
      await courseService.removeFav(id);
      setIsFavorited(false);
    } else {
      await courseService.addToFav(id);
      setIsFavorited(true);
    }
  };

  if (course === undefined) return <PageSpinner />;

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>Onebitflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
          url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px",
          }}
        >
          <HeaderAuth />
        </div>

        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course?.name}</p>
          <p className={styles.courseDescription}>{course?.synopsis}</p>
            <Button
              outline
              className={styles.courseBtn}
              disabled={course?.episodes?.length === 0 ? true : false}
            >
              ASSISTIR AGORA!
              <img
                src="/buttonPlay.svg"
                alt="buttonImg"
                className={styles.buttonImg}
              />
            </Button>
          <div className={styles.interactions}>
            {isLiked === false ? (
              <img
                src="/course/iconLike.svg"
                alt="likeImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            ) : (
              <img
                src="/course/iconLiked.svg"
                alt="likeImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            )}
            {isFavorited === false ? (
              <img
                onClick={handleFavCourse}
                src="/course/iconAddFav.svg"
                alt="addFav"
                className={styles.interactionImages}
              />
            ) : (
              <img
                onClick={handleFavCourse}
                src="/course/iconFavorited.svg"
                alt="addFav"
                className={styles.interactionImages}
              />
            )}
          </div>
        </Container>

        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>EPISÓDIOS</p>
          <p className={styles.episodeLength}>
            {course.episodes?.length != 0 ? (
              `${course?.episodes?.length} episódios`
            ) : (
              <p>
                <strong>
                  &#x1f622; Não há episódios ainda, volte outra hora!
                </strong>
              </p>
            )}
          </p>
          {course?.episodes?.map((episode) => (
            <>
              <EpisodeList key={episode.id} episode={episode} course={course} />
            </>
          ))}
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default CoursePage;
