import Image from "next/image";
import style from "@/styles/components/recruit.module.scss";
import ButtonGradient from "../UI/Button";

const partnersData = [
  {
    id: 1,
    icon: "/images/skills_advantedge/Digital_brands.svg",
    alt: "Digital Consumer Brands",
    title: "Digital Consumer Brands",
  },

  {
    id: 2,
    icon: "/images/skills_advantedge/Digital_marketing.svg",
    alt: "Digital Marketing Agencies",
    title: "Digital Marketing Agencies",
  },

  {
    id: 3,
    icon: "/images/skills_advantedge/Financial.svg",
    alt: "Financial Services Companies",
    title: "Financial Services Companies",
  },

  {
    id: 4,
    icon: "/images/skills_advantedge/Engineering.svg",
    alt: "Engineering & Construction Companies",
    title: "Engineering & Construction Companies",
  },
  {
    id: 5,
    icon: "/images/skills_advantedge/Life_Science.svg",
    alt: "Life Science & Healthcare",
    title: "Life Science & Healthcare",
  },
];

const PartnersItem = (props) => {
  return (
    <div className={style["partners__item"]}>
      <div className={style["partners__item--icon"]}>
        <img src={props.icon} alt={props.alt} />
      </div>
      <div className={style["partners__item--title"]}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

const Recruit = ({ handleShowForm }) => {
  return (
    <div className={style.partners}>
      <h3>We recruit highly qualified and experienced consultants for:</h3>

      <div className={style["partners__buttonDesktop"]}>
        <ButtonGradient handleShowForm={handleShowForm} />
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

        <div className={style["partners__button"]}>
          <ButtonGradient handleShowForm={handleShowForm} />
        </div>
      </div>

      <div className={style.partners__bgoverlay}> </div>
    </div>
  );
};

export default Recruit;
