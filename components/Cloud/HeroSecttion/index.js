import { useEffect } from "react";
import style from "@/styles/components/HeroSec.module.scss";

const HeroSection = (props) => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div className={style.heroSection}>
      <div className={style["heroSection__head"]}>
        <h1> {props.title} </h1>
        <p> {props.sub_title} </p>
      </div>
      <div className={style["heroSection__bgImg"]}>
        <video
          poster={props.poster}
          muted
          autoPlay
          playsInline
          loop
          controls={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 2s",
            opacity: 1,
          }}
        >
          <source src={props.bg} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
