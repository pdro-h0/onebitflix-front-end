import { courseService } from "@/services/courseService";
import styles from "../../../../styles/slideCategory.module.scss";

import useSWR from "swr";
import { SlideComponent } from "@/components/common/SlideComponent";
import { PageSpinner } from "@/components/common/Spinner";

export const FeaturedCategory = () => {
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
      <p className={styles.titleCategory}>EM DESTAQUE</p>
      <SlideComponent course={data.data} />
    </>
  );
};
