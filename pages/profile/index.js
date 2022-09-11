import { useState, useEffect } from "react";
import styles from "./profile.module.scss";
import { Header } from "../../components/header";
import { CourseCard } from "../../components/course-card/course-card";
import { courses, IMG_URL, PROFILE_AVATAR_URL } from "../../constants";
import { Avatar, List, Progress } from "antd";

function Profile() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.profile_card}>
          <img
            alt={"avatar"}
            src={PROFILE_AVATAR_URL}
            className={styles.avatar}
          />
          <div className={styles.profile_info}>
            <Progress
              className={styles.progress}
              strokeColor={{
                "0%": "#77FFFF",
                "100%": "#9D59E1",
              }}
              type="circle"
              percent={50}
            />
            <h3 className={styles.title}>My level: 0</h3>
            <h3 className={styles.title}>
              My balance: <span style={{ color: "gold" }}>50 coins</span>
            </h3>
          </div>
        </div>
        <div className={styles.courses_evals}>
          <div className={styles.courses_list}>
            <h3 className={styles.courses_evals_title}>Courses in progress</h3>
            <List
              className={styles.list}
              itemLayout="horizontal"
              dataSource={courses.slice(0, 1)}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={IMG_URL} />}
                    title={<span style={{ color: "white" }}>{item.title}</span>}
                    description={"Waiting for evaluation"}
                  />
                </List.Item>
              )}
            />
          </div>
          <div className={styles.evals_list}>
            <h3 className={styles.courses_evals_title}>Possible evaluations</h3>
            <List
              className={styles.list}
              itemLayout="horizontal"
              size="large"
              dataSource={Array(4).fill(courses[0])}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={IMG_URL} />}
                    title={
                      <a href={`/check/${item.id}`} style={{ color: "white" }}>
                        {item.title}
                      </a>
                    }
                    description={"Evaluate your peers and earn"}
                  />

                  <span style={{ color: "gold" }}>+50 coins</span>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
