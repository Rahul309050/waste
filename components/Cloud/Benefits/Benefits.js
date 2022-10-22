import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import finance from "../../../public/images/cloud/finance.png";
import { ButtonPurple } from "../../UI/Button";
import style from "@/styles/components/Benefits.module.scss";

const Benefits = (props) => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState("health");

  const navigationChangeHandler = (event) => {
    setCurrentNavigationItem(event.target.id);
  };

  const contentToDisplay = props.cloudBenefitsContent.filter(
    (item) => item.navigationItem === currentNavigationItem
  );

  return (
    <div className={style.benefits}>
      {/* <div className={style["benefits__learnmore"]}>
        <div className={`container ${style["benefits__learnmore--top"]}`}>
          <div className={style["benefits__learnmore--top--text"]}>
            <h1> {props?.learnMoreTitle} </h1>
            <p>{props?.learnMoreDesc}</p>
          </div>
          <div className={style["benefits__learnmore--button"]}>
            <ButtonPurple text="See All Case Studies" />
          </div>
        </div>
      </div> */}
      <div className={`container ${style["benefits__sectors"]}`}>
        <h1>
          <span> {props?.sectionTitle} </span>
          <svg
            id="Group_16222"
            data-name="Group 16222"
            xmlns="http://www.w3.org/2000/svg"
            width="115.431"
            height="166.518"
            viewBox="0 0 115.431 166.518"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_1771"
                  data-name="Rectangle 1771"
                  width="115.431"
                  height="166.518"
                  fill="#19c8ff"
                />
              </clipPath>
            </defs>
            <g id="Group_521" data-name="Group 521" clipPath="url(#clip-path)">
              <path
                id="Path_4557"
                data-name="Path 4557"
                d="M23.386,50.188C41.005,9.184,60.866,2.137,86.813.215c33.729-2.5,31.074,17.3,24.667,37.48s-24.667,64.068-48.692,94.821C45.9,154.132.13,184.859,0,152.377c-.131-33,13.038-78.11,23.384-102.189"
                transform="translate(0 0)"
                fill="#19c8ff"
              />
            </g>
          </svg>
        </h1>
        <div className={style["benefits__sectors--navigation"]}>
          {props.cloudNavigationItems.map((item, index) => (
            <p
              key={item + index}
              id={item.id}
              onClick={navigationChangeHandler}
              style={{
                color: currentNavigationItem === item.id ? "#0B0754" : "",
                borderBottom:
                  currentNavigationItem === item.id
                    ? "2px solid #5C2DCC"
                    : "2px solid transparent",
              }}
            >
              {item.text}
            </p>
          ))}
        </div>

        <div className={style["benefits__sectors--imageWrapper"]}>
          <div className={style["benefits__sectors--img"]}>
            <img src={contentToDisplay[0].image} alt="finance" />
          </div>

          <div className={style["benefits__sectors--content"]}>
            <div className={style["benefits__sectors--title"]}>
              <h2>{contentToDisplay[0].title}</h2>
            </div>
            <div className={style["benefits__sectors--outcome"]}>
              <p> {contentToDisplay[0].subtitle} </p>
              <ul>
                {contentToDisplay[0].items.map((item, index) => (
                  <li key={item + index}>- {item}</li>
                ))}
              </ul>

              {/* <Link href="#" passHref> */}
              <a
                onClick={props.handleShowForm}
                className={style["benefits__sectors--link"]}
              >
                {props.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="85.076"
                  height="19.035"
                  viewBox="0 0 85.076 19.035"
                >
                  <g
                    id="Group_516"
                    data-name="Group 516"
                    transform="translate(-833.923 -1793.724)"
                  >
                    <path
                      id="Path_4378"
                      data-name="Path 4378"
                      d="M5954.87,421h83.6"
                      transform="translate(-5120.947 1382.113)"
                      fill="none"
                      stroke="#5635c4"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_4544"
                      data-name="Path 4544"
                      d="M0,.581,12.312,0l-.459,12.434"
                      transform="translate(908.816 1794.5) rotate(45)"
                      fill="none"
                      stroke="#5635c4"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="79"
                  height="79"
                  viewBox="0 0 79 79"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_711"
                        data-name="Ellipse 711"
                        cx="39.5"
                        cy="39.5"
                        r="39.5"
                        transform="translate(-0.364 -0.364)"
                        fill="#a652ff"
                      />
                    </clipPath>
                    <clipPath id="clip-path-2">
                      <path
                        id="Path_9313"
                        data-name="Path 9313"
                        d="M10204.156,8585.848,10180.1,8617.2h31.177l14.156-15.93v-15.421Z"
                        transform="translate(-10180.103 -8585.848)"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_16216"
                    data-name="Group 16216"
                    transform="translate(-175 -8709)"
                  >
                    <circle
                      id="Ellipse_710"
                      data-name="Ellipse 710"
                      cx="39.5"
                      cy="39.5"
                      r="39.5"
                      transform="translate(175 8709)"
                      fill="#a652ff"
                    />
                    <g
                      id="Mask_Group_23"
                      data-name="Mask Group 23"
                      transform="translate(175.364 8709.363)"
                      clipPath="url(#clip-path)"
                    >
                      <g
                        id="Mask_Group_20"
                        data-name="Mask Group 20"
                        transform="translate(11.592 23.461)"
                        clipPath="url(#clip-path-2)"
                      >
                        <g
                          id="Group_10930"
                          data-name="Group 10930"
                          transform="translate(17.043 6.449)"
                        >
                          <path
                            id="Path_9311"
                            data-name="Path 9311"
                            d="M10190.062,8589.691h20.257v20.758"
                            transform="translate(-10190.062 -8589.691)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="3"
                          />
                          <path
                            id="Path_9312"
                            data-name="Path 9312"
                            d="M10210.074,8589.691l-19.652,19.9"
                            transform="translate(-10189.816 -8589.691)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="3"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
