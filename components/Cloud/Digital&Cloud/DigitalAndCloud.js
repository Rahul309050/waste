import { useContext } from "react";
import { DigitalAndCloudContext } from "../context/digital&cloud";
import ButtonGradient from "../../UI/Button";
import style from "@/styles/components/DigitalAndCloud.module.scss";

// DIGITAL AND CLOUD --- SECTION NAVIGATION

// digital and cloud navigation item
const DigitalAndCloudNavigationItem = (props) => {
  // using the context
  const digitalAndCloudContext = useContext(props.context);

  // using the context to change the navigation item, which will help in determining the currently active navigation item styling and the information to be displayed based on the current navigation item
  const clickHandler = (event) => {
    digitalAndCloudContext.changeCurrentInformation(event.target.id);
  };

  return (
    <div
      className={style["digitalAndCloud__navigation--item"]}
      onClick={clickHandler}
    >
      <p
        id={props.id}
        style={{
          // color: props.active ? "#fff" : "",
          opacity: props.active ? 1 : 0.8,
          paddingLeft: "25px",
          borderLeft: props.active
            ? "1.5px solid #9B5BF6"
            : "1.5px solid #333333",
          fontFamily: props.active ? "ak-med" : "ak-light",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

// digital and cloud navigation component
const DigitalAndCloudNavigation = (props) => {
  // using the context to display to get the current navigation item
  const digitalAndCloudContext = useContext(props.context);

  // fetching the current navigaiton item
  const currentNavigationItem = digitalAndCloudContext?.currentInformation;

  // the "id" field will help to determine the navigation item that is currently active

  return (
    <div className={style["digitalAndCloud__navigation"]}>
      <div className={style["digitalAndCloud__navigation--items"]}>
        {props.digitalAndCloudNavigationItems.map((item, index) => (
          <DigitalAndCloudNavigationItem
            context={props.context}
            id={item.id}
            text={item.text}
            key={item.text + index}
            active={currentNavigationItem === item.id}
          />
        ))}
      </div>
    </div>
  );
};

// DIGITAL AND CLOUD --- SECTION INFORMATION

const DigitalAndCloudInformation = (props) => {
  // using the context to display to get the current navigation item
  const digitalAndCloudContext = useContext(props.context);

  // fetching the current navigaiton item
  const currentNavigationItem = digitalAndCloudContext?.currentInformation;

  // extracting out the information based on current navigation item
  const currentInformationToDisplay = props.servicesData.filter(
    (item) => item.id === currentNavigationItem
  );

  return (
    <div className={style["digitalAndCloud__information"]}>
      <p className={style["sectionTitle"]}> {props.page} </p>

      <h2>{currentInformationToDisplay[0]?.title}</h2>
      <div className={style["digitalAndCloud__information--text"]}>
        <p>{currentInformationToDisplay[0]?.text}</p>

        {currentInformationToDisplay[0]?.item_title && (
          <p className={style["section_title"]}>
            {currentInformationToDisplay[0]?.item_title}
          </p>
        )}

        <ul>
          {currentInformationToDisplay[0]?.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>

        {currentInformationToDisplay[0]?.item_bottom && (
          <p>{currentInformationToDisplay[0]?.item_bottom}</p>
        )}

        {currentInformationToDisplay[0]?.item_title_two && (
          <p className={style["section_title"]}>
            {currentInformationToDisplay[0]?.item_title_two}
          </p>
        )}

        {currentInformationToDisplay[0]?.text_two && (
          <p>{currentInformationToDisplay[0]?.text_two}</p>
        )}

        {currentInformationToDisplay[0]?.item_title_three && (
          <p className={style["section_title"]}>
            {currentInformationToDisplay[0]?.item_title_three}
          </p>
        )}

        {currentInformationToDisplay[0]?.items_two && (
          <ul>
            {currentInformationToDisplay[0]?.items_two.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        )}

        {currentInformationToDisplay[0]?.item_title_four && (
          <p className={style["section_title"]}>
            {currentInformationToDisplay[0]?.item_title_four}
          </p>
        )}

        {currentInformationToDisplay[0]?.items_three && (
          <ul>
            {currentInformationToDisplay[0]?.items_three.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// DIGITAL AND CLOUD --- SECTION IMAGE
const DigitalAndCloudImage = (props) => {
  // using the context to display to get the current navigation item

  const digitalAndCloudContext = useContext(props.context);

  // console.log("digitalAndCloudContext", digitalAndCloudContext);

  // fetching the current navigaiton item
  const currentNavigationItem = digitalAndCloudContext?.currentInformation;
  const currentLottie = props.servicesData.filter(
    (item) => item.id === currentNavigationItem
  );

  return (
    <div className={style["digitalAndCloud__image"]}>
      <div className={style["digitalAndCloud__image--img"]}>
        <img
          className={style.desktopImg}
          src={currentLottie[0]?.desktop_image}
          alt=""
        />
      </div>
    </div>
  );
};

// DIGITAL AND CLOUD --- MAIN COMBINED COMPONENT
const DigitalAndCloud = (props) => {
  // using the context to display to get the current navigation item
  const context = useContext(props.context);

  // fetching the current navigaiton item
  const currentNavigationItem = context?.currentInformation;

  // extracting out the information based on current navigation item
  const currentInformationToDisplay = props.digitalAndCloudServices.filter(
    (item) => item.id === currentNavigationItem
  );
  return (
    <div className={style["digitalAndCloud"]}>
      {/* <div className={style["digitalAndCloud__title"]}>
        <h2 style={{ color: props.titleColor }}>{props.section_title}</h2>
      </div> */}
      <DigitalAndCloudNavigation
        context={props.context}
        servicesData={props.digitalAndCloudServices}
        digitalAndCloudNavigationItems={props.digitalAndCloudNavigationItems}
      />

      <div className={style["digitalAndCloud__content"]}>
        <DigitalAndCloudInformation
          context={props.context}
          servicesData={props.digitalAndCloudServices}
          page={props.section_title}
        />
        <div className={style["digitalAndCloud__button"]}>
          <ButtonGradient handleShowForm={props.handleShowForm} />
        </div>
      </div>

      <div className={style["digitalAndCloud__imageWrapper"]}>
        <div
          style={{ backgroundColor: props.titleColor }}
          className={style["digitalAndCloud__number"]}
        >
          0{currentInformationToDisplay[0]?.number}
        </div>
        <DigitalAndCloudImage
          context={props.context}
          servicesData={props.digitalAndCloudServices}
        />
      </div>
    </div>
  );
};

export default DigitalAndCloud;
