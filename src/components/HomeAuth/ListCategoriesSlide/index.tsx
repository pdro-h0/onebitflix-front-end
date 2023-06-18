import { SlideComponent } from "@/components/common/SlideComponent";
import { categoriesService } from "@/services/categoriesService";

import useSWR from "swr";

import styles from "../../../../styles/slideCategory.module.scss";
import { PageSpinner } from "@/components/common/Spinner";

interface props {
  categoryId: number;
  categoryName: string;
}

export const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
  const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () => {
    return categoriesService.getCourses(categoryId);
  });


  if (error) return error;
  if (!data)
  return (
    <>
      <PageSpinner />
    </>
  );
  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses} />
    </>
  );
};
