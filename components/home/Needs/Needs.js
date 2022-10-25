import Link from "next/link";

import style from "../../../styles/components/Needs.module.scss";

const needsData = [
  {
    id: 1,
    title: "Air pollution ",
    text: "Air pollution is contamination of the indoor or outdoor environment by any chemical, physical or biological agent that modifies the natural characteristics of the atmosphere. Household combustion devices, motor vehicles, industrial facilities and forest fires are common sources of air pollution.",
  },
    

  {
    id: 2,
    title: "Soil pollution",
    text: "Soil pollution refers to the contamination of soil with anomalous concentrations of toxic substances. It is a serious environmental concern since it harbours many health hazards. For example, exposure to soil containing high concentrations of benzene increases the risk of contracting leukaemia.",
  },


];

const NeedsItem = (props) => {
  return (
    <div className={style["needs__item"]}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

const Needs = ({ handleShowForm, onToggle }) => {
  return (
    <div className={style.needs}>
      <div className={style["needs__head"]}>
        <p>What happens when waste is burnt ?</p>

      </div>
      <div className={style["needs__container"]}>
        {needsData.map((e) => {
          return <NeedsItem key={e.id} title={e.title} text={e.text} />;
        })}
      </div>
    </div>
  );
};

export default Needs;
