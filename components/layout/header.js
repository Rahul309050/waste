import classes from "../../styles/layout/header.module.scss";
import Link from "next/link";

const Header = () => {
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
            <Link href="/chapter2" passHref className={classes.contact}>
                <a className={classes.contact}>
                  Chapter 2&nbsp;&nbsp;
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
            <Link href="/" passHref>
                <a className={classes.contact}>
                  Chapter 1&nbsp;&nbsp;
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
              <a className={classes.mob_header_logo}>
                <img
                  className={classes.mob_header_logo_img}
                  src="/icons/Core-Waste-Logo.svg"
                  alt=""
                />
              </a>
            </Link>

            <div className={classes.mob_nav_right}>
            <Link href="/chapter2" passHref className={classes.contact}>
                <a className={classes.contact}>
                  Ch:2&nbsp;&nbsp;
                
                </a>
              </Link>
            <Link href="/" passHref>
                <a className={classes.contact}>
                  Ch:1&nbsp;&nbsp;
            
                </a>
              </Link>
              <Link href="/contact">
                <a className={classes.contactUs}>
                  My profile&nbsp;&nbsp;
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
      </nav>
    </>
  );
};

export default Header;
