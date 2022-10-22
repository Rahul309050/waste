// import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";

import Popup from "@/components/Popup/Popup";
import ButtonGradient from "@/components/UI/Button";

import style from "@/styles/components/Services.module.scss";
import { useRouter } from "next/router";

// separate component for the 3 menu items in the serives section
const ServicesNavigationItem = (props) => {
  return (
    <div className={style["services__navigation--item"]}>
      <p>{props.text}</p>
    </div>
  );
};

// a separate component for the services navigation
const ServicesNavigation = () => {
  // creating an array to loop through for the navogation items
  const navigationItems = [
    "Cloud Transformation",
    "Intelligent Automation",
    "Cloud Security Services",
  ];

  return (
    <div className={style["services__navigation"]}>
      <div className={style["services__navigation--items"]}>
        {/* looping through the array to display the navigation items */}
        {navigationItems.map((item, index) => (
          <ServicesNavigationItem text={item} key={item + index} />
        ))}
      </div>
    </div>
  );
};

const ServiceContainerItem = ({ item, handleShowForm, setFormTitle }) => {
  const [openPopup, toggleOpenPopup] = useState(false);

  const togglePopup = () => toggleOpenPopup((previousState) => !previousState);

  const router = useRouter();

  let popupHeadTitle = "";

  if (router.pathname === "/cloud") {
    popupHeadTitle = "Digital & Cloud Services";
  } else if (router.pathname === "/cyber-security") {
    popupHeadTitle = "Cyber Security";
  } else {
    popupHeadTitle = "Skills AdvantEdge";
  }

  useEffect(() => {
    if (openPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openPopup]);

  return (
    <>
      {openPopup && (
        <Popup
          head={popupHeadTitle}
          togglePopup={toggleOpenPopup}
          popItem={item}
          // title={item.title}
          // text={item.text}
          // duration={item.duration}
          isPopupOpen={openPopup}
          handleShowForm={handleShowForm}
          setFormTitle={setFormTitle}
        />
      )}
      <div className={style["services__container--item"]} onClick={togglePopup}>
        <div className={style["services__container--item--title"]}>
          <p>{item.title}</p>
        </div>
        <div className={style["services__container--item--text"]}>
          <p>{item.text}</p>
        </div>
        <div className={style["services__container--item--bottom"]}>
          <div className={style["services__container--item--duration"]}>
            <p>{item.duration}</p>
          </div>
          <div className={style["services__container--item--number"]}>
            <p>0{item.id}</p>
          </div>
          <div className={style["services__container--item--arrow"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55.997"
              height="16.475"
              viewBox="0 0 55.997 16.475"
            >
              <g
                id="Group_11020"
                data-name="Group 11020"
                transform="translate(-852.832 -1794.112)"
              >
                <path
                  id="Path_4378"
                  data-name="Path 4378"
                  d="M5954.871,421h55.258"
                  transform="translate(-5102.04 1381.232)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <path
                  id="Path_4544"
                  data-name="Path 4544"
                  d="M0,.521,11.052,0,10.64,11.161"
                  transform="translate(900.275 1794.5) rotate(45)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

//separate component for services container
const ServicesContainer = (props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const serviceItems =
    width >= 601 && width <= 1024
      ? props.serviceItemData.slice(0)
      : props.serviceItemData.slice(0).reverse();

  return (
    <div className={style["services__container--items"]}>
      {serviceItems.map((item) => (
        <ServiceContainerItem
          item={item}
          // title={item.title}
          // duration={item.duration}
          // text={item.text}
          // id={item.id}
          key={item.id}
          handleShowForm={props.handleShowForm}
          setFormTitle={props.setFormTitle}
        />
      ))}
    </div>
  );
};

const Services = (props) => {
  return (
    <section className={style.services}>
      {/* SERVICE NAVIGATION */}
      {/* <ServicesNavigation /> */}
      {/* SERVICE CONTENT */}
      <div className={`container ${style["services__content"]}`}>
        <div className={style["services__content--left"]}>
          <p className={style["services__content--title"]}>
            {props.section_title}
          </p>
          <div className={style["services__content--button"]}>
            <ButtonGradient
              handleShowForm={props.handleShowForm}
              setFormTitle={props.setFormTitle}
            />
          </div>
        </div>
        <div className={style["services__container"]}>
          <ServicesContainer
            serviceItemData={props.serviceItemData}
            handleShowForm={props.handleShowForm}
            setFormTitle={props.setFormTitle}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
