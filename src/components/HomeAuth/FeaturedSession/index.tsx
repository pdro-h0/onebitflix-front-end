import { CourseType, courseService } from "@/services/courseService";
import { HeaderAuth } from "@/components/common/HeaderAuth";

import styles from "./styles.module.scss";

import useSWR from "swr";
import { Button, Container } from "reactstrap";
import Link from "next/link";
import { PageSpinner } from "@/components/common/Spinner";

export const FeaturedSession = () => {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

  if (error) return error;
  if (!data)
    return (
      <>
        <PageSpinner />
      </>
    );
  return (
    <>
      {
        data.data?.map((course: CourseType) => {
          return (
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, #000, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "480px",
              }}
              key={course.id}
            >
              <HeaderAuth />
              <Container className="pt-4">
                <p className={styles.title}>{course.name}</p>
                <p className={styles.description}>{course.synopsis}</p>
                <Link style={{textDecoration:"none"}} href={`/course/${course.episodes}`}>
                  <Button outline color="light" className={styles.button}>
                    ACESSE AGORA!
                    <img
                      src="/buttonPlay.svg"
                      alt="apenas a imagem do botão player"
                      className={styles.buttonImg}
                    />
                  </Button>
                </Link>
              </Container>
            </div>
          );
        })[0]
      }
    </>
  );
};
