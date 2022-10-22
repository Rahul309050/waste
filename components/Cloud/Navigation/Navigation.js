import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DigitalAndCloudContext } from "../context/digital&cloud";

import style from "../../../styles/components/Navigation.module.scss";

const NavigationItem = (props) => {
  // importing "changeCurrentInformation" function (to change the digital and cloud information).
  const { changeCurrentInformation } = useContext(DigitalAndCloudContext);

  // handler for changing the current information section
  const changeCurrentInformationHandler = (event) =>
    changeCurrentInformation(event.target.parentElement.id);

  return (
    <div
      className={style["navigation__item"]}
      id={props.id}
      onClick={changeCurrentInformationHandler}
    >
      <Link href="/cloud#digitalAndCloud">
        <a> {props.text} </a>
      </Link>
    </div>
  );
};

const NavigationMobileitem = (props) => {
  const { id } = props;
  const scrollToElement = () => {
    if (id === "crm") {
      if (window.innerWidth > 600 && window.innerWidth < 1024) {
        window.scrollTo(0, 3000);
      } else if (window.innerWidth <= 600) {
        window.scrollTo(0, 3900);
      }
    } else if (id === "cs") {
      if (window.innerWidth > 600 && window.innerWidth < 1024) {
        window.scrollTo(0, 4050);
      } else if (window.innerWidth <= 600) {
        window.scrollTo(0, 4790);
      }
    } else if (id === "wp") {
      if (window.innerWidth > 600 && window.innerWidth < 1024) {
        window.scrollTo(0, 5100);
      } else if (window.innerWidth <= 600) {
        window.scrollTo(0, 6150);
      }
    } else if (id === "aa") {
      if (window.innerWidth > 600 && window.innerWidth < 1024) {
        window.scrollTo(0, 6000);
      } else if (window.innerWidth <= 600) {
        window.scrollTo(0, 7150);
      }
    } else if (id === "ds") {
      if (window.innerWidth > 600 && window.innerWidth < 1024) {
        window.scrollTo(0, 7000);
      } else if (window.innerWidth <= 600) {
        window.scrollTo(0, 8350);
      }
    }
  };

  return (
    <div
      className={style["navigation__item"]}
      id={props.id}
      onClick={scrollToElement}
    >
      <Link href={`/cloud#digitalAndCloud/#${props.id}`}>
        <a> {props.text}</a>
      </Link>
    </div>
  );
};

const Navigation = () => {
  // using state to determine the current postion of the page from the top.
  const [scrollPosition, setScrollPosition] = useState(0);

  // associating id with the navigation item to determine which information will get displayed.
  const navigationItems = [
    { id: "crm", text: "CRM" },
    { id: "cs", text: "Cloud Solutions" },
    { id: "wp", text: "Workplace" },
    { id: "aa", text: "Automation & AI" },
    { id: "ds", text: "DevOps" },
  ];

  // using "useEffect" to hide the sticky navigaiton when the page reaches towards the footer
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, [setScrollPosition]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0,
      }}
      className={style["navigation"]}
      style={{ display: scrollPosition >= "100%" ? "none" : "block" }}
    >
      <div className={style["navigation__container"]}>
        <div className={style["navigation__container--desktop"]}>
          {navigationItems.map((item, index) => (
            <NavigationItem text={item.text} id={item.id} key={index} />
          ))}
        </div>
        <div className={style["navigation__container--mobile"]}>
          {navigationItems.map((item, index) => (
            <NavigationMobileitem text={item.text} id={item.id} key={index} />
          ))}
        </div>
      </div>

      <div className={style.movingBg}></div>
    </motion.nav>
  );
};

export default Navigation;
