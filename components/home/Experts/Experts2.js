import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Player } from "@lottiefiles/react-lottie-player";
import Accordion from "../../accordion/Accordion";
import style from "../../../styles/components/Experts2.module.scss";

const expertise = [
  {
    id: 1,

    icon: "/lottie/lf30_editor_y2xctnen.json",
    title: "WET  WASTE",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* Use a reusable bottle/cup for beverages on-the-go.",
        body2: "* Use reusable grocery bags, and not just for groceries.",
        body3: "* Purchase wisely and recycle",
        body4: "* Compost it!",

      },
      {
        id: 2,
        head: "Types",
        body1: "* Grease",
        body2: "* Oli",
        body3: "* Waste Detergents",
        body4: "* Sludges",
        body5: "* Dirty Water",
      },
      {
        id: 3,
        head: "Percentage",
        body1: "Open dumping accounts for about 31 percent of waste, 19 percent is recovered through recycling and composting, and 11 percent is incinerated for final disposal.",
      },

    ],
  },
  {
    id: 2,
    icon: "/lottie/lf30_editor_6wvgmh0u.json",
    title: "DRY WASTE",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* Use a reusable bottle/cup for beverages on-the-go.",
        body2: "* Use reusable grocery bags, and not just for groceries.",
        body3: "* Purchase wisely and recycle",
        body4: "* Compost it!",
      },
      {
        id: 2,
        head: "Types",
        body1: "* Paper",
        body2: "* Glass",
        body3: "* Plastic",
        body4: "* Ruber",
        body5: "* Metal,etc.",
      },
      {
        id: 3,
        head: "Percentage",
        body2: "India currently generates approximately 1.45 lakh metric tonnes of solid waste per day, 35% of which is dry waste. It consists of different components such as plastic, paper & cardboard, glass & ceramic, metals, textiles, tyres & rubbers, etc.",
      },

    ],
  },
  {
    id: 3,
    icon: "/lottie/lf30_editor_1nazvkgo.json",
    title: "HAZARDOUS/REJECT WASTE",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "*  Underground disposal",
        body2: "* Landfill disposal",
        body3: "* Ocean dumping",
      },
      {
        id: 2,
        head: "Types",
        body1: "* Explosives",
        body2: "* Gases",
        body3: "* Flammable Liquids",
        body4: "*  Flammable Solids or Substances",  
          },
      {
        id: 3,
        head: "Percentage",
        body2: "Household hazardous waste (HHW) generally comprises only 1%–4% of municipal solid waste, but the potential risks to the environment and health are disproportionate to its size.",
      },

    ],
  },
  {
    id: 4,
    icon: "/lottie/lf30_editor_bxypnew8.json",
    title: "E-WASTE",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* Re-evaluate.",
        body2: "* Extend the life of your electronics.",
        body3: "* Buy environmentally friendly electronics.",
        body4: "* Donate used electronics to social programs.",  
        body5: "* Reuse large electronics.",    
        body6: "* Recycle electronics and batteries in e-waste recycling bins located around campus.", 
      },
      {
        id: 2,
        head: "Types",
        body1: "* Screens, monitors.",
        body2: "* Lamps.",
        body3: "* Large equipment.",
        body4: "* Small equipment. ",  
        body5: "* Small IT and telecommunication equipment.",    
        body6: "* Bring your own garment bag to the dry cleaner.",       },
      {
        id: 3,
        head: "Percentage",
        body2: "Around 78% of India's e-waste is not being collected or disposed by the government - The Hindu BusinessLine.",
        
      },

    ],
  },


];

const ExpertItem = (props) => {
  const router = useRouter();

  const [accIndex, setAccIndex] = useState(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  const handleNavigation = () => router.push(`${props.pageRoute}`);

  return (
    <div className={style["experts__item"]}>
      <div className={style["experts__item--icon"]}>
        <lottie-player
          autoplay
          loop
          // speed={2}
          src={props.icon}
          style={{ height: "100%", width: "100%", margin: "0" }}
          mode="normal"
        ></lottie-player>
      </div>
      <h2 className={style["experts__item--head"]} onClick={handleNavigation}>
        {props.title}
        {props.sup && <sup> {props.sup} </sup>}
      </h2>
      <div className={"experts__item--listContainer"} >
        {props.items.map((item, index) => (
          <div key={item + index} className={style["experts__item--listItem"]}>
            <Accordion
              e={item}
              // i={index}
              setIndex={setAccIndex}
              
              index={accIndex }
              hColor="#5622BD"
            />


          </div>
        ))}
      </div>
    
    </div>
  );
};

const Experts = () => {
  return (
    <div className={style.experts}>
      <p>Types of Waste / Dustbins</p>
      <div className={style["experts__container"]}>
        {expertise.map((e) => {
          return (
            <ExpertItem
              key={e.id}
              // height={151}
              // width={143}
              icon={e.icon}
              title={e.title}
              items={e.items}
              pageRoute={e.pageRoute}
              sup={e?.sup}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experts;
