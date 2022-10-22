import Image from "next/image";
import Link from "next/link";
import agrim from "../../public/icons/footer-logo.svg";

import style from "@/styles/layout/Footer.module.scss";

const footerData = [
  // {
  //   id: 1,
  //   title: "Services",
  //   items: [
  //     {
  //       id: 1,
  //       page: "Digital & Cloud",
  //       href: "/cloud",
  //     },
  //     {
  //       id: 2,
  //       page: "Cyber Security",
  //       href: "/cyber-security",
  //     },
  //     // {
  //     //   id: 3,
  //     //   page: "Cybersecurity Products",
  //     //   href: "/cybersecurity-products",
  //     // },
  //     {
  //       id: 4,
  //       page: "Skills Advantedge",
  //       sup: "TM",
  //       href: "/skills-adventedge",
  //     },
  //   ],
  // },

  // {
  //   id: 2,
  //   title: "Company",
  //   items: [
  //     {
  //       id: 1,
  //       page: "About",
  //       href: "/about",
  //     },
  //     {
  //       id: 2,
  //       page: "Leadership Team",
  //       href: "/about#leadership_team",
  //     },
  //     {
  //       id: 3,
  //       page: "Our Values",
  //       href: "/about",
  //     },
  //     {
  //       id: 4,
  //       page: "Sustainable Business",
  //       href: "/about#sustainable_business",
  //     },
  //     {
  //       id: 5,
  //       page: "Contact Us",
  //       href: "/contact",
  //     },
  //     {
  //       id: 6,
  //       page: "Career",
  //       href: "/careers",
  //     },
  //   ],
  // },

  // {
  //   id: 3,
  //   title: "Resources",
  //   items: [
  //     {
  //       id: 1,
  //       page: "Case Studies",
  //       href: "/case-studies",
  //     },
  //     {
  //       id: 2,
  //       page: "Blogs",
  //       href: "/blogs",
  //     },
  //   ],
  // },
];

const MenuItem = (props) => {
  return (
    <div className={style["footer__menu--item"]}>
      <h3>{props.title}</h3>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <Link href={item.href} passHref>
              <a>
                {item.page}
                {item.sup && <sup>{item.sup}</sup>}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={`container ${style["footer__bottom"]}`}>
        {/* <div className={style["footer__bottom--logo"]}>
          <Image src={agrim} alt="agrim logo" width={202} height={45} />
        </div>

        <div className={style["footer__tagline"]}>
          <p>Based in Nordics. Helping Worldwide</p>
          <div className={style["footer__address--contact"]}>
            <a href="tel:+ 47 22 22 00 70">+ 47 22 22 00 70</a>
            <a href="mailto:post@agrim.no"> post@agrim.no </a>
          </div>
        </div> */}

        {/* <div className={style["footer__address"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.335"
            height="49.833"
            viewBox="0 0 36.335 49.833"
          >
            <g
              id="Group_17888"
              data-name="Group 17888"
              transform="translate(0.001 -0.001)"
            >
              <g
                id="Group_769"
                data-name="Group 769"
                transform="translate(-0.001 0.001)"
              >
                <path
                  id="Path_9482"
                  data-name="Path 9482"
                  d="M18.164,49.833a.958.958,0,0,1-.83-.479l-1.968-3.409A126.644,126.644,0,0,0,4.029,29.583,18.176,18.176,0,0,1,13.9.506,18.538,18.538,0,0,1,22.321.465h0A17.872,17.872,0,0,1,35.853,13.94a18.534,18.534,0,0,1-.014,8.454,18.227,18.227,0,0,1-3.481,7.121,140.706,140.706,0,0,0-11.99,17.461l-1.375,2.378a.958.958,0,0,1-.83.479Zm-1.138-4.847,1.138,1.972.543-.941a142.558,142.558,0,0,1,12.153-17.7,16.39,16.39,0,0,0,3.124-13.955A15.991,15.991,0,0,0,21.906,2.337,16.265,16.265,0,0,0,5.518,28.381a128.219,128.219,0,0,1,11.508,16.6Z"
                  transform="translate(0.001 -0.001)"
                  fill="#fff"
                />
                <path
                  id="Path_9483"
                  data-name="Path 9483"
                  d="M106.176,112.579a7.633,7.633,0,1,1,5.389-2.235,7.624,7.624,0,0,1-5.389,2.235m0-13.332h0a5.714,5.714,0,1,0,4.034,1.674,5.709,5.709,0,0,0-4.034-1.674Z"
                  transform="translate(-88.012 -86.92)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>

          <h4> Norway </h4>
          <p>AGRIM</p>
          <p>Terminal 9 B, 3414 Lierstranda, Norway</p>

          <h4 className={style["country"]}>India</h4>
          <p style={{ paddingBottom: "1%" }}>AGRIM IT SOLUTIONS </p>
          <p style={{ paddingBottom: "1%" }}>
            D-11/7 First Floor, Sector 52, Ardee City,
          </p>
          <p style={{ paddingBottom: "1%", paddingBottom: "50px" }}>
            Gurugram, India - 122011
          </p>
        </div> */}

        <div className={style["footer__menu"]}>
          {footerData.map((data) => {
            return (
              <div key={data.id} className={style["footer__menu-1"]}>
                <MenuItem title={data.title} items={data.items} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style["footer__privacyPolicy"]}>
        <div className={style["footer__social"]}>
          <a
            href="https://www.linkedin.com/company/agrim-as/"
            target="_blank"
            rel="noreferrer"
            className={style["footer__social--linkedin"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.395"
              height="22.362"
              viewBox="0 0 23.395 22.362"
            >
              <path
                id="Path_9320"
                data-name="Path 9320"
                d="M81.2,111.894V96.805H76.181v15.088H81.2ZM78.689,94.746a2.794,2.794,0,1,0-.033,0h.033Zm5.282,17.148h5.015v-8.425a3.436,3.436,0,0,1,.165-1.224,2.745,2.745,0,0,1,2.573-1.834c1.814,0,2.54,1.384,2.54,3.412v8.071H99.28v-8.651c0-4.634-2.474-6.791-5.773-6.791a5,5,0,0,0-4.553,2.542h.033V96.806H83.972c.065,1.415,0,15.088,0,15.088Z"
                transform="translate(-75.885 -89.532)"
                fill="#fff"
              />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/AgrimTechnologies"
            target="_blank"
            rel="noreferrer"
            className={style["footer__social--facebook"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.286"
              height="25.588"
              viewBox="0 0 13.286 25.588"
            >
              <g
                id="Group_311"
                data-name="Group 311"
                transform="translate(13.286) rotate(90)"
              >
                <path
                  id="f"
                  d="M25.586,4.663H13.915V.746L9.364.159v4.5h-2.9c-1.319,0-2.214-.365-2.214-2.255V0H.179A33.246,33.246,0,0,0,0,3.508c0,3.473,2.121,5.85,6.013,5.85H9.368v3.927h4.551V9.359H25.588Z"
                  transform="translate(0)"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>

          <a
            href="tel:+ 47 22 22 00 70"
            className={style["footer__social--facebook"]}
          >
            <svg
              height="18px"
              version="1.1"
              viewBox="0 0 18 18"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
              >
                <g
                  fill="#fff"
                  id="Icons-Communication"
                  transform="translate(-85.000000, -126.000000)"
                >
                  <g id="phone" transform="translate(85.000000, 126.000000)">
                    <path
                      d="M3.6,7.8 C5,10.6 7.4,12.9 10.2,14.4 L12.4,12.2 C12.7,11.9 13.1,11.8 13.4,12 C14.5,12.4 15.7,12.6 17,12.6 C17.6,12.6 18,13 18,13.6 L18,17 C18,17.6 17.6,18 17,18 C7.6,18 0,10.4 0,1 C0,0.4 0.4,0 1,0 L4.5,0 C5.1,0 5.5,0.4 5.5,1 C5.5,2.2 5.7,3.4 6.1,4.6 C6.2,4.9 6.1,5.3 5.9,5.6 L3.6,7.8 L3.6,7.8 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>

          <a
            href="https://www.google.com/maps?q=Terminalen+9b,+3414+Lier&ftid=0x46413cc02aa55555:0x47cbfdb598df3061&hl=en-NO&gl=no&entry=gps&lucs=a1&shorturl=1"
            target="_blank"
            rel="noreferrer"
            className={style["footer__social--facebook"]}
          >
            <svg
              id="Group_17940"
              data-name="Group 17940"
              xmlns="http://www.w3.org/2000/svg"
              width="46.598"
              height="59.509"
              viewBox="0 0 46.598 59.509"
            >
              <path
                id="Path_21816"
                data-name="Path 21816"
                d="M23.3,0C10.485,0,0,10.1,0,22.522A22.051,22.051,0,0,0,4.66,35.984l17.6,23.04a1.392,1.392,0,0,0,1.812.259l.259-.259,17.6-23.04A22.052,22.052,0,0,0,46.6,22.522C46.6,10.1,36.114,0,23.3,0ZM21.487,31.324A9.037,9.037,0,1,1,32.1,20.71a9.123,9.123,0,0,1-7.119,10.614,7.965,7.965,0,0,1-3.495,0"
                fill="#fff"
              />
            </svg>
          </a>
        </div>

        {/* <div className={style.siteDesign}>
          <Link href="/privacy-policy" passHref>
            <a> Privacy Policy </a>
          </Link>

          <a href="https://www.kurage.in/" target="_blank" rel="noreferrer">
            Designed & developed by Kurage
          </a>
        </div> */}
        {/* <div className={style.copyRight}>
          &copy; 2022 Agrim
          <p></p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
