import style from "@/styles/components/DigitalAndCloud.module.scss";
import Link from "next/link";

const DigitalAndCloudMob = ({ digitalAndCloudServices, handleShowForm }) => {
  return (
    <div className={style.digitalAndCloudMob}>
      {digitalAndCloudServices.map((item) => {
        return (
          <div
            key={item.id}
            className={style.digitalAndCloudMob__content}
            id={item.id}
          >
            <img src={item.mobile_image} alt={item.title} />

            <h2> {item.title} </h2>
            <span></span>

            {item.text && <p className={style.descText}> {item?.text} </p>}

            {item?.item_title && <h4>{item?.item_title}</h4>}

            <ul>
              {item.items.map((pointer, index) => {
                return <li key={index}> {pointer} </li>;
              })}
            </ul>

            {item?.item_title_two && (
              <h4 style={{ paddingTop: "15px" }}>{item?.item_title_two} </h4>
            )}

            {item.text_two && (
              <p className={style.descText}> {item?.text_two} </p>
            )}

            {item?.item_title_three && <h4>{item?.item_title_three} </h4>}

            {item?.items_two && (
              <ul>
                {item.items_two.map((pointer, index) => {
                  return <li key={index}> {pointer} </li>;
                })}
              </ul>
            )}

            {item?.item_title_four && (
              <h4 style={{ paddingTop: "15px" }}> {item?.item_title_four} </h4>
            )}

            {item?.items_three && (
              <ul>
                {item.items_two.map((pointer, index) => {
                  return <li key={index}> {pointer} </li>;
                })}
              </ul>
            )}

            {/* <p className={style.getInTouch} onClick={handleShowForm}>
              Get In Touch
            </p> */}
          </div>
        );
      })}
    </div>
  );
};

export default DigitalAndCloudMob;
