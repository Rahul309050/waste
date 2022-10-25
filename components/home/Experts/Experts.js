import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Player } from "@lottiefiles/react-lottie-player";
import Accordion from "../../accordion/Accordion";
import style from "../../../styles/components/Experts.module.scss";

const expertise = [
  {
    id: 1,

    icon: "/lottie/120680-paper-recycling.json",
    title: "Paper Waste",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* Think before you print.",
        body2: "*Use reusable, washable towels instead of tissue paper.",
        body3: "* Give old newspapers to animal shelter.",
        body4: "* Use a blackboard or whiteboard.",

      },
      {
        id: 2,
        head: "Types",
        body1: "* Mill broke.",
        body2: "*Pre-consumer waste.",
        body3: "*Post-consumer waste.",
      },
      {
        id: 3,
        head: "Percentage",
        body1: "The average American consumes more than 700 pounds of paper each year. Paper accounts for 25 percent of waste in the landfill and 33 percent of municipal waste. About 68 million trees are cut down each year to produce paper and paper products. If you don't recycle the paper you use, it all ends up in the landfill.",
      },

    ],
  },
  {
    id: 2,
    icon: "/lottie/120668-glass-recycling.json",
    title: "Glass Waste",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* The broken pieces are crushed,",
        body2: "*Sorted",
        body3: "* Cleaned",
        body4: "* And prepared to be mixed with other raw materials like soda ash and sand.",
      },
      {
        id: 2,
        head: "Types",
        body2: "Municipal solid waste",
      },
      {
        id: 3,
        head: "Percentage",
        body2: "States with container deposit legislation have an average glass container recycling rate of just over 63%, while non-deposit states only reach about 24%, according to the Container Recycling Institute",
      },

    ],
  },
  {
    id: 3,
    icon: "/lottie/120675-cardboard-recyclying.json",
    title: "Organic Waste",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* Respect Your Food: Shop Efficiently",
        body2: "* Don’t Throw Your Food Away If It’s Not Expired Yet",
        body3: "* Recycling organic wastes to land would benefit soil quality",
        body4: "* Help to establish a more sustainable use of soil and fertilisers.",
      },
      {
        id: 2,
        head: "Types",
        body1: "* Green waste",
        body2: "* Food waste",
        body3: "* Green waste",
        body4: "* Pruning waste",  
        body5: "* Non-hazardous wood waste",  
          },
      {
        id: 3,
        head: "Percentage",
        body2: "Municipal solid waste comprises 30% to 55% of bio- degradable (organic) matter, 40% to 55% inert matter and 5% to 15% recyclables.",
      },

    ],
  },
  {
    id: 4,
    icon: "/lottie/plastic.json",
    title: "Plastic Waste",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* Stop buying water.",
        body2: "* Boycott microbeads.",
        body3: "* Purchase items secondhand",
        body4: "* Support a bag tax or ban.",  
        body5: "* Buy in bulk.",    
        body6: "* Bring your own garment bag to the dry cleaner.", 
      },
      {
        id: 2,
        head: "Types",
        body1: "* Polyethylene Terephthalate (PETE)",
        body2: "* High-Density Polyethylene (HDPE)",
        body3: "* Polyvinyl Chloride (PVC)",
        body4: "* Low-Density Polyethylene (LDPE)",  
        body5: "* Polypropylene (PP)",    
        body6: "* Miscellaneous Plastics (Mix plastics)",    
          },
      {
        id: 3,
        head: "Percentage",
        body2: "Only 9% of plastic waste is recycled (15% is collected for recycling but 40% of that is disposed of as residues).",
      },

    ],
  },
  {
    id: 5,
    icon: "/lottie/120678-electronic-recycling.json",
    title: "E-Waste",
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
  {
    id: 6,
    icon: "/lottie/24939-building-tables-and-generating-metadata.json",
    title: "Metal Waste",
    items: [
      {
        id: 1,
        head: "Solutions",
        body1: "* Collection.",
        body2: "* Sorting.",
        body3: "* Processing.",
        body4: "* Shredding.",  
        body5: "* Melting and Purification.",  
        body6: "* Melting and Solidifying of the Metal.",  
      },
      {
        id: 2,
        head: "Types",
        body1: "* Steel.",
        body2: "* Copper.",
        body3: "* Aluminum.",
        body4: "* Cast iron and wrought iron.",  
      },
      {
        id: 3,
        head: "Percentage",
        body2: "This was a higher recycling rate than for many other types of metal. The U.S. recycled more than 50 million metric tons of iron and steel in 2019, giving a recycling rate of 47 percent.",
        
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
      <p>Types of Waste</p>
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
