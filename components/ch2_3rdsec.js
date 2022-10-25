import { useEffect, useState, useRef } from "react";
import classes from "../styles/components/ch2_3rdsec.module.scss";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import lottie from "lottie-web";

const Items = [
  {
    id: 2,
    image: "/img/id2.svg",
    title: "#Landfill ",
    image: "/lottie/42514-happy-woman-watering-plants.json",

    description:
      "• A landfill is an engineered pit, in which layers of solid waste are filled, compacted and covered for final disposal. \n • It is lined at the bottom to prevent groundwater pollution. \n • Engineered landfills consist of a lined bottom\n 1) a leachate collection and treatment system\n 2) groundwater monitoring\n 3) gas extraction.\n• The capacity is planned and the site is chosen based on an environmental risk assessment study (UNEP 2002).\n •  There are also landfills specially designed to encourage anaerobic biodegradation of the organic fraction of the waste for biogas production by monitoring the oxygen conditions and moisture content.\n • Landfills need expert design as well as skilled operators and a proper management to guarantee their functionality.",
  },
  {
    id: 3,
    image: "/img/id3.svg",
    image: "/lottie/79208-people-growing-new-business-idea.json",

    title: "# Blackspot ",
    description:
      "• There are pre-defined spots in every city where smaller garbage collection vehicles transfer their waste on to bigger vehicles. \n• When the workers do not pay attention to the transfer process and leave the transfer spot dirty\n• It leads to the formation of a 'black spot'.\n• Although BBMP has been working to clean them \n• The corporation has also been responsible for the creation of a number of black spots themselves.",
  },
  {
    id: 4,
    image: "/img/id5.svg",
    title: "The Dangers of Using Black \n Plastic Bags to Wrap Meat",
    image: "/lottie/75553-watermelon-animation.json",

    description:
      "• Do not wrap meat with plastic bags or black plastic bags. \n• Sutarno said black plastic is not safe because it is the result of recycling of various plastics with unhygienic processes.\n• According to him, the most appropriate and safe wrap for the sacrificial meat or other food is clear or transparent plastic because it is not a product of recycling. \n• So we recommend the community for the use of transparent plastics alone he said.\n• Because it is easy for meat to be contaminated with viruses around it, I hope the community is healthy,  he said.\n• There are number of congenital diseases one needs to watch out for, including liver worms, anthrax, and other infectious diseases.",
  },
  {
    id: 5,
    image: "/img/id6.svg",
    image: "/lottie/33954-delivery-man-on-the-way.json",

    title: "Parcel Cover",
    title1: "✔ Parcel Cover comming out from stomach",
    description1:
      "The plastic will leave your system after a day since it's small and your body tries to get rid of anything that can't be dissolved or used effectively.",
    title2: "✔ How does waste affect animals And birds? ",
    description2:
      "Garbage dumping sites have both physical and toxicological implications on animal life. Plastics present in garbage gets ingested by wild animals, leading to lethal injuries and damage to digestive tract which results in starvation, ulceration of stomach, reduced fitness, growth problems and premature death.",

    title3: "✔ Throw Waste in Dry Bin",
    description3:
      "Dry waste consists of waste that does not decay. It is also known as waste which cannot be biodegradable. Dry waste consists of paper, glass, thermocol, Styrofoam, rubber, metal, cloth, empty bottles, stationeries, etc. and can be recycled into new products further.",
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
            Difference between the
 <br /> Landfill and blackspot.{" "}
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
