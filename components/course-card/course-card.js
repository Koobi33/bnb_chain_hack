import styles from "./course-card.module.scss";
import { Rate } from "antd";

const CourseCard = function ({
  title,
  description,
  value,
  id,
  img,
  difficulty,
}) {
  return (
    <a href={`/courses/${id}`} className={styles.wrapper}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.body}>
        <div className={styles.additional_info}>
          <div className={styles.difficulty}>
            <span className={styles.difficulty_title}>difficulty:</span>
            <Rate disabled defaultValue={difficulty} />
          </div>
          <div className={styles.earns}>+{value} coins</div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export { CourseCard };
