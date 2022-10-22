import { useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import style from "@/styles/components/Clients.module.scss";

const ClientsItem = (props) => {
  return (
    <div className={style["clients__item"]}>
      <div className={style["clients__item--number"]}>
        <p>0{props.index}</p>
      </div>
      <div className={style["clients__item--head"]}>
        <p>{props.title}</p>
      </div>
      <div className={style["clients__item--img"]}>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className={style["clients__item--list"]}>
        <ul>
          {props.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={style["clients__item--button"]}>
        <a>
          Case Study
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61.447"
              height="12.612"
              viewBox="0 0 61.447 12.612"
            >
              <g
                id="Group_516"
                data-name="Group 516"
                transform="translate(-825.384 -1793.918)"
              >
                <path
                  id="Path_4378"
                  data-name="Path 4378"
                  d="M5954.871,421h60.339"
                  transform="translate(-5129.487 1379.141)"
                  fill="none"
                  stroke="#5635c4"
                  strokeWidth="1.5"
                />
                <path
                  id="Path_4544"
                  data-name="Path 4544"
                  d="M8097.053,1743.712l8.063-.38-.3,8.143"
                  transform="translate(-3612.739 -5163.702) rotate(45)"
                  fill="none"
                  stroke="#5635c4"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

const Clients = ({ clientData }) => {
  const clientSliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots: false,
    // appendDots: (dots) => <div className="slick-slider-dots"> {dots} </div>,

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 200,
          dots: true,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 200,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={style.clients}>
      <div className={style["clients__title"]}>
        <p>
          Our <br />
          <span className={style["client"]}>Clients</span>
          <span className={style["bgIcon"]}>
            <svg
              id="Group_522"
              data-name="Group 522"
              xmlns="http://www.w3.org/2000/svg"
              width="119.827"
              height="172.859"
              viewBox="0 0 119.827 172.859"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_1771"
                    data-name="Rectangle 1771"
                    width="119.827"
                    height="172.859"
                    fill="#19c8ff"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_521"
                data-name="Group 521"
                clipPath="url(#clip-path)"
              >
                <path
                  id="Path_4557"
                  data-name="Path 4557"
                  d="M24.277,52.1C42.567,9.534,63.184,2.218,90.119.223c35.013-2.594,32.257,17.957,25.606,38.907s-25.606,66.508-50.546,98.432C47.647,160,.135,191.9,0,158.18-.134,123.928,13.537,77.1,24.277,52.1"
                  fill="#19c8ff"
                />
              </g>
            </svg>
          </span>
        </p>
        <Link href="/case-studies" passHref>
          <a className={style["pageLink"]}>All Case Studies</a>
        </Link>
      </div>
      <div className={style["clients__container"]}>
        <Slider {...settings} ref={clientSliderRef}>
          {clientData.map((item) => {
            return (
              <Link
                href="/case-studies/[slug]"
                as={`/case-studies/${item.slug}`}
                passHref
                key={item.id}
              >
                <a>
                  <ClientsItem
                    index={item.id}
                    img={item.image}
                    alt={item.alt}
                    // width={399}
                    // height={237}
                    title={item.title}
                    items={item.item}
                  />
                </a>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
