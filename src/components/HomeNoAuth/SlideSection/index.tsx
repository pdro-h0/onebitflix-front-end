import { Button, Container } from "reactstrap";
import Link from "next/link";

import { CourseType } from "@/services/courseService";
import { SlideComponent } from "@/components/common/SlideComponent";

import styles from "./styles.module.scss";

interface props {
  newestCourses: CourseType[];
}

export const SlideSection = ({ newestCourses }: props) => {
  return (
    <>
      <Container fluid>
        <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
          <Button outline color="light" className={styles.slideSectionBtn}>
            Se cadastre para acessar!
          </Button>
        </Link>
      </Container>
    </>
  );
};
