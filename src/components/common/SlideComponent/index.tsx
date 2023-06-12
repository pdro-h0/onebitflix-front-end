import { CourseType } from "@/services/courseService";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { SlideCard } from "../SlideCard";

interface props {
  course: CourseType[];
}

export const SlideComponent = ({ course }: props) => {
  return (
    <>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            pagination: false,
          }}
        >
          {course?.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <SlideCard course={item} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};
