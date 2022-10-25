import { useState, useRef } from "react";
import classes from ".././styles/pages/ch2_2ndsec.module.scss";


const accordionContent = [
  {
    id: 1,
    title: "1. How they are digging to put waste? ",
    link: "https://www.youtube.com/watch?v=eTGdnj4hSpk" ,
    content:
      "*01 Dig a hole, approximately 10 to 12 inches deep and as wide as you want or need it to be. *02)Drop food scraps or other organic matter into the hole. *03) Replace the soil, and you're done.      ",
  },
  {
    id: 2,
    title: "2. How they are forced to eat inside the mosquito net?",
    link: "https://www.youtube.com/watch?v=eTGdnj4hSpk" ,

    content:
      "In this Masterclass, we explore the most trending topics in the world of Product Management. You get a pulse of the industry that you’d love to grow your career in, making this Masterclassthe perfect stepping stone.",
  },

  {
    id: 3,
    title: "3. The poisonous liquid oozingg out.    ",
    link: "https://www.youtube.com/watch?v=eTGdnj4hSpk" ,

    content:
      "Of course! Learning is only useful when it is interactive. At the end of the Masterclass, there will be a Q&A session where Manan will answer ALL your doubts.",
  },
  {
    id: 4,
    title: "4. The fruit farm destroyed by the flies",
    link: "https://www.youtube.com/watch?v=eTGdnj4hSpk" ,

    content:
      "All participants of this Masterclass will be awarded a certificate upon completion of the Masterclass. Feel free to flaunt your certificates on all your social media profiles!",
  },
];

const Accordion = ({ e, i, setIndex, index }) => {
  const plane = useRef(null);
  // console.log("testing",e)

  return (

    <div className={classes.accordion}   style={{borderBottom:e.id == 8 ? "none" : " "}}
    >
      <div
        className={classes.accordion__head}
        onClick={() => setIndex(e.id === index ? null : e.id)}
      >
   
        <p>{e?.title}</p>
        <svg
          style={{
            transform: e?.id === index ? "rotate(45deg)" : "rotate(0deg)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="25.877"
          height="25.877"
          viewBox="0 0 25.877 25.877"
        >
          <g
            id="Group_764"
            data-name="Group 764"
            transform="translate(-1788.313 -6815.688)"
          >
            <path
              id="Path_9480"
              data-name="Path 9480"
              d="M6262.313,6798.626h25.877"
              transform="translate(-4474 30)"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              id="Path_9481"
              data-name="Path 9481"
              d="M6262.313,6798.626h25.877"
              transform="translate(8599.878 553.375) rotate(90)"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      <div
        ref={plane}
        className={classes.accordion__body}
        style={{
          maxHeight:
            e?.id === index ? `${plane?.current?.scrollHeight}px` : "0px",
        }}
      >
        <p>{e?.content} <br />    <a href=""   target="_blank"
            rel="noreferrer"
            className="linkss">{e?.link}</a> </p>
      </div>
    </div>

  );
};

const Sixthsec = () => {
  const [accIndex, setAccIndex] = useState(null);

  return (

    <section  className={classes.sixthsec} id="">
      <div className={`${classes.sixthsec__content} container`}>
        <h2 className={classes.sectionTitle}>
          {" "}
          Mandur hell on earth          <br />
          Let’s take a look !
        </h2>

        <div className={classes.sixthsecContainer}>
          {accordionContent.map((e, i) => {
            return (
              <div key={e.id} 
              // style={{borderBottom:e.length - 1 ? "none" : " "}}
              >
                <Accordion
                  e={e}
                  i={i}
                  setIndex={setAccIndex}
                  index={accIndex}
                />
              </div>
            );
          })}
        </div> 
      </div>
    </section>

  );
};

export default Sixthsec;
