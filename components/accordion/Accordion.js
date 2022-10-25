import React, { useState, useRef } from "react";
// import Chevron from "@/components/Chevron";
import classes from "../../styles/components/accordion.module.scss";

// import "./Accordion.css";

function Accordion({ e, i, index, setIndex, hColor }) {
  const [activeState, setActiveState] = useState("");

  const plane = useRef(null);

  return (
    <div className={classes.accordion__section}>
      <button
        className={`${classes.accordion} ${activeState}`}
        onClick={() => setIndex(e.id === index ? null : e.id)}
        style={{
          paddingTop: i === 0 ? "10px" : "",
          // paddingBottom: i === e?.title?.length - 1 ? "40px" : "",
        }}
      >
        <svg
          className={
            e?.id === index ? "accordion__icon rotate" : "accordion__icon"
          }
          style={{
            transform: e?.id === index ? "rotate(0deg)" : "rotate(-90deg)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="13.693"
          height="9.82"
          viewBox="0 0 13.693 9.82"
        >
          <g
            id="Group_10669"
            data-name="Group 10669"
            transform="translate(13.443 9.467) rotate(180)"
          >
            <path
              style={{
                fill: e?.id === index ? "#19C8FF" : "#fff",
                stroke: e?.id === index ? "#19C8FF" : "#fff",
              }}
              id="Path_4516"
              data-name="Path 4516"
              d="M0,8.863V6.6L6.6,0l6.6,6.6V8.863l-6.6-6.6Z"
              fill="#fff"
              stroke="#fff"
              strokeWidth="0.5"
            />
          </g>
        </svg>

        <p
          style={{ color: e?.id === index ? "#19C8FF" : "#fff" }}
          className={classes.accordion__title}
        >
          {e?.head}
        </p>
      </button>
      <div
        ref={plane}
        style={{
          maxHeight:
            e?.id === index ? `${plane?.current?.scrollHeight}px` : "0px",
        }}
        className={classes.accordion__content}
      >
        {e?.body1}
        <br />
        <br />

        {e?.body2}
        <br />
        <br />


        {e?.body3}
        <br />
        <br />


        {e?.body4}
        <br />
        <br />


        {e?.body5}
        <br />
        

        {e?.body6}
      </div>
    </div>
  );
}

export default Accordion;
