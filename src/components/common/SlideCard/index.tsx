import Link from "next/link";
import { CourseType } from "../../../services/courseService";

import styles from "./styles.module.scss";

interface props {
  course: CourseType;
}
export const SlideCard = ({ course }: props) => {
  return (
    <>
      <Link style={{textDecoration:"none"}} href={`/course/${course.id}`}>
        <div className={styles.slide}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
            alt={course.name}
            className={styles.slideImg}
          />
          <p className={styles.slideTitle}>{course.name}</p>
          <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
      </Link>
    </>
  );
};
