import { useEffect, useState, useRef } from "react";
import classes from "../styles/components/ch3_3rdsec.module.scss";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import lottie from "lottie-web";

const Items = [
  {
    id: 2,
    image: "/img/id2.svg",
    title: "There are 3 conditions if any of it is yes then it becomes wet waste",
    image: "/lottie/83845-girl-watering-woman.json",

    description:
      "1. Do we eat ?\n 2. Has it come from the animals or birds.\n 3. Has it derived directly from trees or plants \n\n If any one of the above condition answer is yes then its wet waste. For all the questions the answer is no means it becomes dry or reject or e-waste   ",
  },
  {
    id: 3,
    image: "/img/id3.svg",
    image: "/lottie/83729-maple-leaves.json",

    title: "Now, dry leaf is what waste?",
    description:
      "• Do we eat? \n • HAS it come from animals or birds? \n • Has it from plants or tress ? \n • Therefore dry leaf will be what waste? ",
  },
  {
    id: 4,
    image: "/img/id5.svg",
    title: "Now egg shells is what waste?",
    image: "/lottie/61286-chick.json",

    description:
    "• Do we eat? \n • HAS it come from animals or birds? \n • Has it from plants or tress ? \n • Has it from plants or tress ?",
},
  {
    id: 5,
    image: "/img/id5.svg",
    title: "Now wet paper is what waste?",
    image: "/lottie/29925-take-that-paperwork.json",

    description:
    "• Do we eat? \n • HAS it come from animals or birds? \n • Has it from plants or tress ? \n • Has it come directly from the tress or plants ? \n\nCoconut shell is the only exception, even though it has come from the tree we put this waste in dry bin as it goes to make the activated charcoal.",
},

];

const Fifthsec = () => {
  const container = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <ParallaxProvider>
      <section id="" className={classes.fifthsec}>
        <div className={`${classes.fifthsec__content} container`}>
          <div className={classes.maintitle}>
            <h1>
            What is wet waste ?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="187.181"
                height="110.878"
                viewBox="0 0 187.181 110.878"
              >
                <g
                  id="Group_11631"
                  data-name="Group 11631"
                  transform="translate(3.57 3.501)"
                >
                  <path
                    id="Path_4787"
                    data-name="Path 4787"
                    d="M-4673.945,8311.173c39.82-.8,63.937,15.622,58.281,46.647s-45.489,27.352-26.028-11.962,127.989-41.024,128.05,65.473"
                    transform="translate(4673.945 -8311.145)"
                    fill="none"
                    stroke="#010039"
                    stroke-linecap="round"
                    stroke-width="7"
                  />
                  <path
                    id="Path_4736"
                    data-name="Path 4736"
                    d="M1.076,37.4c4.359-8.662,9.512-14.468,20.841-18.961C12.937,15.509,4.79,10.922,0,0"
                    transform="translate(179 81.96) rotate(90)"
                    fill="none"
                    stroke="#010039"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="7"
                  />
                </g>
              </svg>
            </h1>
          </div>
          {Items.map((item) => {
            return (
              <div key={item.id} className={classes.Item}>
                <div className={classes.Item__image}>
                {item.image && (
                  <lottie-player
                    autoplay
                    loop
                    src={item.image}
                    style={{ width: "100%", height: "100%" }}
                    mode="normal"
                  ></lottie-player>
                )}                </div>

                <div className={classes.Item__desc}>
                  <h2> {item.title} </h2>
                  <p> {item.description} </p>
                  <a>
                    {" "}
                    {item.title1} <br />{" "}
                  </a>

                  <span>
                    {" "}
                    {item.description1} <br />{" "}
                  </span>
                  <a>
                    {" "}
                    {item.title2} <br />{" "}
                  </a>

                  <span>
                    {" "}
                    {item.description2} <br />{" "}
                  </span>
                  <a>
                    {" "}
                    {item.title3} <br />{" "}
                  </a>

                  <span> {item.description3} </span>
                </div>
              </div>
            );
          })}

          <div className={classes.grabyourseatnow}>
            {/* <lottie-player
            autoplay
            loop
            src="/lottie/grab_seat_now.json"
            style={{ width: "100%", height: "100%" }}
            mode="normal"
            hover={() => pause()} 

          ></lottie-player> */}
            <div
              ref={container}
              onMouseEnter={() => lottie.pause()}
              onMouseLeave={() => lottie.play()}
            />
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Fifthsec;
