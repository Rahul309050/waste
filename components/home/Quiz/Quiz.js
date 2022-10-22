import Link from "next/link";
import style from "@/styles/components/Quiz.module.scss";

const Quiz = () => {
  return (
    <div className={style.quiz}>
      <h3>Not Sure About The Digital Transformation Path for your business?</h3>
      <div className={style["quiz__img"]}>
        <img src="/images/home_page/quiz.png" alt="" />
      </div>

      <Link href="#">
        <a className={style["quiz__button"]}> Take The Quiz </a>
      </Link>
    </div>
  );
};

export default Quiz;
