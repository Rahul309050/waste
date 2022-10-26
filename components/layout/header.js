import classes from "../../styles/layout/header.module.scss";
import Link from "next/link";
import { useState, useRef  } from "react";
const accordionContent = [
  {
    id: 1,
    title: "Product",
    content1: "Technology",
    content2: "Telecom",
  },
];
const Accordion = ({ e, i, setIndex, index }) => {
  const plane = useRef(null);

  

  return (
    <div className={classes.accordion}>
      <div
        className={classes.accordion__head}
        onClick={() => setIndex(e.id === index ? null : e.id)}
      >
        <p>{e?.title}</p>
        <div className={classes.downArrow}>
          <svg
            style={{
              transform: e.id === index ? "rotate(180deg)" : "rotate(0deg)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="11.414"
            height="6.207"
            viewBox="0 0 11.414 6.207"
          >
            <g
              id="Group_596"
              data-name="Group 596"
              transform="translate(10.707 0.707) rotate(90)"
            >
              <path
                id="Path_62"
                data-name="Path 62"
                d="M0,10,5,5,0,0"
                transform="translate(0 0)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        ref={plane}
        className={classes.accordion__body}
        style={{
          maxHeight:
            e?.id === index ? `${plane?.current?.scrollHeight}px` : "0px",
        }}
      >
        <p> <Link href="technology" passHref>{e?.content1}</Link> </p>
        <p><Link href="telecom" passHref>{e?.content2}</Link></p>
      </div>
    </div>
  );
};


const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen((prev) => !prev);
  const [accIndex, setAccIndex] = useState(null);
  return (
    <>
      <nav className={classes.header}>
        <div className={`${classes.header__content} container`}>
          <Link href="/" passHref>
            <a className={classes.logo_img}>
              <img
                className={classes.header__content_logo}
                src="/icons/Core-Waste-Logo.svg"
                alt=""
              />
            </a>
          </Link>
          <div className={classes.header__content_right}>
            <div className={classes.header__content_links} id="nav">
            <Link href="/" passHref>
                <a className={classes.contact}>
                  Chapter 1
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55.864"
                    height="11.013"
                    viewBox="0 0 55.864 11.013"
                  >
                    <g
                      id="Group_118"
                      data-name="Group 118"
                      transform="translate(-1721.872 -63)"
                    >
                      <path
                        id="Path_4378"
                        data-name="Path 4378"
                        d="M5954.872,421h54.165"
                        transform="translate(-4233 -352.5)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.3"
                      />
                      <g
                        id="Group_117"
                        data-name="Group 117"
                        transform="translate(1777.735 63) rotate(90)"
                      >
                        <path
                          id="Path_4516"
                          data-name="Path 4516"
                          d="M0,7.4V5.508L5.506,0l5.507,5.508V7.4L5.506,1.891Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </Link>
            <Link href="/chapter2" passHref className={classes.contact}>
                <a className={classes.contact}>
                  Chapter 2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55.864"
                    height="11.013"
                    viewBox="0 0 55.864 11.013"
                  >
                    <g
                      id="Group_118"
                      data-name="Group 118"
                      transform="translate(-1721.872 -63)"
                    >
                      <path
                        id="Path_4378"
                        data-name="Path 4378"
                        d="M5954.872,421h54.165"
                        transform="translate(-4233 -352.5)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.3"
                      />
                      <g
                        id="Group_117"
                        data-name="Group 117"
                        transform="translate(1777.735 63) rotate(90)"
                      >
                        <path
                          id="Path_4516"
                          data-name="Path 4516"
                          d="M0,7.4V5.508L5.506,0l5.507,5.508V7.4L5.506,1.891Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </Link>
            <Link href="/chapter3" passHref className={classes.contact}>
                <a className={classes.contact}>
                  Chapter 3
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55.864"
                    height="11.013"
                    viewBox="0 0 55.864 11.013"
                  >
                    <g
                      id="Group_118"
                      data-name="Group 118"
                      transform="translate(-1721.872 -63)"
                    >
                      <path
                        id="Path_4378"
                        data-name="Path 4378"
                        d="M5954.872,421h54.165"
                        transform="translate(-4233 -352.5)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.3"
                      />
                      <g
                        id="Group_117"
                        data-name="Group 117"
                        transform="translate(1777.735 63) rotate(90)"
                      >
                        <path
                          id="Path_4516"
                          data-name="Path 4516"
                          d="M0,7.4V5.508L5.506,0l5.507,5.508V7.4L5.506,1.891Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </Link>
            <Link href="/chapter4" passHref className={classes.contact}>
                <a className={classes.contact}>
                  Chapter 4
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55.864"
                    height="11.013"
                    viewBox="0 0 55.864 11.013"
                  >
                    <g
                      id="Group_118"
                      data-name="Group 118"
                      transform="translate(-1721.872 -63)"
                    >
                      <path
                        id="Path_4378"
                        data-name="Path 4378"
                        d="M5954.872,421h54.165"
                        transform="translate(-4233 -352.5)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.3"
                      />
                      <g
                        id="Group_117"
                        data-name="Group 117"
                        transform="translate(1777.735 63) rotate(90)"
                      >
                        <path
                          id="Path_4516"
                          data-name="Path 4516"
                          d="M0,7.4V5.508L5.506,0l5.507,5.508V7.4L5.506,1.891Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </Link>
     
              <Link href="/contact">
                <a className={classes.contactUs}>
                  My Profile&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55.864"
                    height="11.013"
                    viewBox="0 0 55.864 11.013"
                  >
                    <g
                      id="Group_118"
                      data-name="Group 118"
                      transform="translate(-1721.872 -63)"
                    >
                      <path
                        id="Path_4378"
                        data-name="Path 4378"
                        d="M5954.872,421h54.165"
                        transform="translate(-4233 -352.5)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.3"
                      />
                      <g
                        id="Group_117"
                        data-name="Group 117"
                        transform="translate(1777.735 63) rotate(90)"
                      >
                        <path
                          id="Path_4516"
                          data-name="Path 4516"
                          d="M0,7.4V5.508L5.506,0l5.507,5.508V7.4L5.506,1.891Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.bottomGradient}></div>
      </nav>

      <nav className={classes.mob_header}>
        <div className={`${classes.mob_header_content} container`}>
          <div className={classes.mob_header_content_main}>
            <Link href="/" passHref>
              <a className={classes.logo} style={{maxWidth:"10px" , scale:'0.17'}} >
                <img src="/icons/Core-Waste-Logo.svg" alt="" />{" "}
              </a>
            </Link>
            
      
      


            <div onClick={handleNavClick} className={classes.hamburgerDiv}>
         
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.327"
                  height="24.327"
                  viewBox="0 0 24.327 24.327"
                >
                  <path
                    id="Path_689"
                    data-name="Path 689"
                    d="M-746.41,355.483a2.433,2.433,0,0,1-2.433-2.433,2.433,2.433,0,0,1,2.433-2.433,2.433,2.433,0,0,1,2.433,2.433A2.433,2.433,0,0,1-746.41,355.483Zm9.731,0a2.433,2.433,0,0,1-2.433-2.433,2.433,2.433,0,0,1,2.433-2.433,2.433,2.433,0,0,1,2.433,2.433A2.433,2.433,0,0,1-736.679,355.483Zm9.731,0a2.433,2.433,0,0,1-2.433-2.433,2.433,2.433,0,0,1,2.433-2.433,2.433,2.433,0,0,1,2.433,2.433A2.433,2.433,0,0,1-726.948,355.483Zm-19.462,9.731a2.433,2.433,0,0,1-2.433-2.433,2.433,2.433,0,0,1,2.433-2.433,2.433,2.433,0,0,1,2.433,2.433A2.433,2.433,0,0,1-746.41,365.214Zm9.731,0a2.433,2.433,0,0,1-2.433-2.433,2.433,2.433,0,0,1,2.433-2.433,2.433,2.433,0,0,1,2.433,2.433A2.433,2.433,0,0,1-736.679,365.214Zm9.731,0a2.433,2.433,0,0,1-2.433-2.433,2.433,2.433,0,0,1,2.433-2.433,2.433,2.433,0,0,1,2.433,2.433A2.433,2.433,0,0,1-726.948,365.214Zm-21.895,7.3a2.433,2.433,0,0,0,2.433,2.433,2.433,2.433,0,0,0,2.433-2.433,2.433,2.433,0,0,0-2.433-2.433A2.433,2.433,0,0,0-748.843,372.512Zm9.731,0a2.433,2.433,0,0,0,2.433,2.433,2.433,2.433,0,0,0,2.433-2.433,2.433,2.433,0,0,0-2.433-2.433A2.433,2.433,0,0,0-739.112,372.512Zm9.731,0a2.433,2.433,0,0,0,2.433,2.433,2.433,2.433,0,0,0,2.433-2.433,2.433,2.433,0,0,0-2.433-2.433A2.433,2.433,0,0,0-729.381,372.512Z"
                    transform="translate(748.843 -350.618)"
                    fill="#040190"
                    fillRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.787"
                  height="23.787"
                  viewBox="0 0 17.787 17.787"
                >
                  <g
                    id="Group_11421"
                    data-name="Group 11421"
                    transform="translate(8.893 -7.479) rotate(45)"
                  >
                    <line
                      id="Line_1277"
                      data-name="Line 1277"
                      x2="23.154"
                      transform="translate(0 11.577)"
                      fill="none"
                      stroke="#040190"
                      strokeWidth="1.5"
                    />
                    <line
                      id="Line_1278"
                      data-name="Line 1278"
                      x2="23.154"
                      transform="translate(11.577 0) rotate(90)"
                      fill="none"
                      stroke="#040190"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
                
              )}

            </div>

          </div>

          <div
            style={{
              transform: open ? "translateX(0)" : "translateX(100%)",
            }}
            className={`${classes.sidenav} container`}
            // onClick={handleNavClick}
          >
            <div className={classes.sidenav_items}>
              {/* {accordionContent.map((e, i) => {
                return (
                  <div key={e.id}>
                    <Accordion
                      e={e}
                      i={i}
                      setIndex={setAccIndex}
                      index={accIndex}
                    />
                  </div>
                );
              })} */}
                 <Link href="/contact">
                <a  className={classes.sidenav_items_link}>
                  My Profile
                
                </a>
              </Link>

              <Link href="/" passHref>
                <a className={classes.sidenav_items_link}>Chapter 1</a>
              </Link>

              <Link href="/chapter2" passHref>
                <a className={classes.sidenav_items_link}>Chapter 2</a>
              </Link>
              <Link href="/chapter3" passHref>
                <a className={classes.sidenav_items_link}>Chapter 3</a>
              </Link>
              <Link href="/chapter4" passHref>
                <a className={classes.sidenav_items_link}>Chapter 4</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
