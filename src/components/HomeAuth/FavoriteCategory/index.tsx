import { courseService } from "@/services/courseService";
import styles from "../../../../styles/slideCategory.module.scss";

import useSWR from "swr";
import { SlideComponent } from "@/components/common/SlideComponent";

export const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", courseService.getFavCourses);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>CARREGANDO...</p>
      </>
    );

  return (
    <>
      <p className={styles.titleCategory}>Minha lista</p>
      {data.data.courses.length >= 1 ? (
        <SlideComponent course={data.data.course} />
      ) : (
        <p className="text-center pt-3 h5">
          <strong>Você não tem nenhum curso na lista!</strong>
        </p>
      )}
    </>
  );
};
