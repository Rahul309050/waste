import Image from "next/image";
import style from "@/styles/components/Partners.module.scss";

const partnersData = [
  {
    id: 1,
    icon: "/icons/home_page/partners/aware.svg",
    alt: "EC-Council Aware",
    title: "EC-Council Aware",
    bgColor: "#000",
    text: "Improve your organisation's security awareness  with a world-class Phishing, Vishing, SMShing, and eLearning platform.",
  },

  {
    id: 2,
    icon: "/icons/home_page/partners/sailpoint.svg",
    alt: "Sailpoint",
    title: "Sailpoint",
    bgColor: "#012168",
    text: "Enhance your enterprise's access management using a world-class platform, Sailpoint. With the experience of complex on-premise implementation of IDAM solutions, Agrim is the authorized implementation partner of SailPoint in the Nordics region.",
  },

  {
    id: 3,
    icon: "/icons/home_page/partners/archer.svg",
    alt: "Archer",
    title: "Archer",
    bgColor: "#0C3877",
    text: "Get Governance, Risk, and Compliance to efficiently manage your organisation's ISMS Platform. Work with one of the best GRC platforms in the world, – Archer.",
  },

  {
    id: 4,
    icon: "/icons/home_page/partners/microsoft.svg",
    alt: "Microsoft Partner",
    title: "Microsoft Partner",
    bgColor: "#311E59",
    text: "Agrim is a proud member of the Microsoft Partner Network, providing businesses innovative cloud solutions and security.",
  },
];

const PartnersItem = (props) => {
  return (
    <div
      className={style["partners__item"]}
      style={{ backgroundColor: props.bgColor }}
    >
      <div className={style["partners__item--icon"]}>
        <img src={props.icon} alt={props.alt} />
      </div>
      <div className={style["partners__item--title"]}>
        <h2>{props.title}</h2>
      </div>
      <div className={style["partners__item--text"]}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className={style.partners}>
      <h3>We’re Experts &#38; Valued Partner Of</h3>
      <div className={style.bgIcon}>
        <svg
          id="Group_10686"
          data-name="Group 10686"
          xmlns="http://www.w3.org/2000/svg"
          width="149.497"
          height="215.66"
          viewBox="0 0 149.497 215.66"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_1771"
                data-name="Rectangle 1771"
                width="149.497"
                height="215.66"
                fill="#c371ff"
              />
            </clipPath>
          </defs>
          <g id="Group_521" data-name="Group 521" clipPath="url(#clip-path)">
            <path
              id="Path_4557"
              data-name="Path 4557"
              d="M30.288,65C53.107,11.894,78.829,2.767,112.433.278c43.682-3.236,40.244,22.4,31.946,48.541s-31.946,82.976-63.062,122.8C59.444,199.619.168,239.414,0,197.346-.167,154.613,16.889,96.184,30.288,65"
              transform="translate(0 0)"
              fill="#c371ff"
            />
          </g>
        </svg>
      </div>
      <div className={style["partners__container"]}>
        {partnersData.map((e) => {
          return (
            <PartnersItem
              key={e.id}
              icon={e.icon}
              alt={e.alt}
              title={e.title}
              text={e.text}
              bgColor={e.bgColor}
            />
          );
        })}
      </div>
      <div className={style.partners__bgoverlay}> </div>
    </div>
  );
};

export default Partners;
