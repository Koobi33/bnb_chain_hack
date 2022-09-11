import { CourseCard } from "../course-card/course-card";
import styles from "./courses-list.module.scss";
import { IMG_URL } from "../../constants";

const CoursesList = function ({ courses }) {
  return (
    <div className={styles.wrapper}>
      {courses.map((item) => (
        <CourseCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          difficulty={item.difficulty}
          value={item.value}
          img={IMG_URL}
        />
      ))}
    </div>
  );
};

export { CoursesList };
