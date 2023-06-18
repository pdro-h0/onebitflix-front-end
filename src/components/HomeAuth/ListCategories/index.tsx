import { CategoryType, categoriesService } from "@/services/categoriesService";

import { ListCategoriesSlide } from "../ListCategoriesSlide";

import useSWR from "swr";
import { PageSpinner } from "@/components/common/Spinner";


export const ListCategories = () => {
  const { data, error } = useSWR(
    "/listCategories",
    categoriesService.getCategories
  );

  if (error) return error;
  if (!data)
    return (
      <>
        <PageSpinner />
      </>
    );
  return (
    <>
      {data.data.categories?.map((category: CategoryType) => {
        return (
          <ListCategoriesSlide
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
          />
        );
      })}
    </>
  );
};
