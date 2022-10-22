import Image from "next/image";

import { ButtonPurple } from "../../UI/Button";
import ButtonGradient from "../../UI/Button";

import style from "@/styles/components/GetStarted.module.scss";

const GetStartedItem = (props) => {
  return (
    <div
      style={{ backgroundColor: props.cardBg }}
      className={style["getStarted__item"]}
    >
      <div className={style["getStarted__item--img"]}>
        <img src={props.img} alt="" />
      </div>
      <div className={style["getStarted__item--title"]}>
        <h2>{props.title}</h2>
      </div>
      <div className={style["getStarted__item--text"]}>
        <p>{props.text}</p>
      </div>
      <div className={style["getStarted__item--button"]}>
        {/* {props.buttonText === "Let's Talk" ? (
          <p
            className={style["getStarted__item--LetsTalk"]}
            onClick={props.handleShowForm}
          >
            Let&apos;s Talk
          </p>
        ) : ( */}
        <ButtonPurple
          text={props.buttonText}
          handleShowForm={props.handleShowForm}
        />
        {/* )} */}
      </div>
    </div>
  );
};

const GetStatedItems = (props) => {
  return (
    <div className={style["getStarted__items"]}>
      {props.getStartedItems.map((item) => (
        <GetStartedItem
          title={item.title}
          text={item.text}
          img={item.img}
          buttonText={item.buttonText}
          key={item.id}
          cardBg={props.cardBg}
          handleShowForm={props.handleShowForm}
        />
      ))}
    </div>
  );
};

const GetStarted = (props) => {
  return (
    <div className={style.getStarted}>
      <h1 style={{ color: props.titleColor }}>Get Started With Us</h1>
      <div className={style["getStarted__container"]}>
        <GetStatedItems
          getStartedItems={props.getStartedItems}
          cardBg={props.cardBg}
          handleShowForm={props.handleShowForm}
        />
      </div>
    </div>
  );
};

export default GetStarted;
