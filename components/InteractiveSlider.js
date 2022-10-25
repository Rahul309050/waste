import React, { Component } from "react";
import Slider from "react-slick";
import classes from "../styles/components/styles.module.scss";

export default class AsNavFor extends Component {
  // state = {
  //   activeSlide: 0,
  //   activeSlide2: 0,
  // };
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3,
    });
  }

  render() {
    const navSettings = {
      infinite: true,

      arrows: false,
      dots: false,
      nav: true,
      cssEase: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",

      responsive: [
        {
          breakpoint: 1310,
          settings: {
            centerMode: false,
          },
        },
      ],
    };

    const titleSettings = {
      infinite: true,

      arrows: false,
      dots: false,
      nav: false,
      fade: true,
      cssEase: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
      // beforeChange: (current, next) => this.setState({ activeSlide: next }),
      // afterChange: current => this.setState({ activeSlide2: current }),

      responsive: [
        {
          breakpoint: 1310,
          settings: {
            centerMode: false,
          },
        },
      ],
    };

    const settings = {
      infinite: true,
      variableWidth: true,
      centerMode: true,
      speed: 1300,
      arrows: false,
      dots: false,
      nav: true,
      cssEase: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",

      responsive: [
        {
          breakpoint: 1310,
          settings: {
            centerMode: false,
          },
        },
      ],
    };

    return (
      <div className={classes.firstSection}>
        <div className={`${classes.firstSection__content}`}>
          {" "}
          {/*  */}
          <Slider
            className={classes.slider2}
            {...settings}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div className={classes.videoSlide}>
              <video
                // poster={"/img/futuristic.jpg"}
                muted={false}
                autoPlay={false}
                playsInline
                loop
                controls={true}
              >
                <source src={"/video/environmental-pollution-animation-2-youtube_kOkRRMQ1.mp4"} type="video/mp4" />
              </video>
            </div>
            <div className={classes.videoSlide}>
              <video
                // poster={"/img/innovative.jpg"}
                muted={false}
                autoPlay={false}
                playsInline
                loop
                controls={true}
              >
                <source src={"/video/air.mp4"} type="video/mp4" />
              </video>
            </div>
            <div className={classes.videoSlide}>
              <video
                // poster={"/img/connected.jpg"}
                muted={false}
                autoPlay={false}
                playsInline
                loop
                controls={true}
              >
                <source src={"/video/soil-pollution-what-are-the-causes-of-soil-pollution-soil-pollution-effects_lP1QTJ1E.mp4"} type="video/mp4" />
              </video>
            </div>
          </Slider>
          <Slider
            className={classes.sliderHeading}
            {...titleSettings}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider3 = slider)}
            // fade={true}
          >
            {/* <div className={classes.contentHeading}>
              <h5 className="hero-content-line-inner">
                Translating the latest technologies that shape the future
              </h5>
            </div>
            <div className={classes.contentHeading}>
              <h5 className="hero-content-line-inner">
                Exploring new ways to add value to your life
              </h5>
            </div>
            <div className={classes.contentHeading}>
              <h5 className="hero-content-line-inner">
                Catering to B2B and B2C consumers in South and South East Asia
              </h5>
            </div> */}
          </Slider>
          <Slider
            className={classes.slider}
            {...navSettings}
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            fade={true}
          >
            <div className={classes.content}>
              <h5 className="hero-content-line-inner"> Pollution </h5>
            </div>
            <div className={classes.content}>
              <h5 className="hero-content-line-inner">Air Pollution </h5>
            </div>
            <div className={classes.content}>
              <h5 className="hero-content-line-inner">Soil pollution </h5>
            </div>
          </Slider>
          <div className={classes.sliderBtn}>
            <span onClick={() => this.state.nav3.slickNext()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.521"
                height="9.034"
                viewBox="0 0 13.521 9.034"
              >
                <g
                  id="Group_10819"
                  data-name="Group 10819"
                  transform="translate(-5200.997 -712.186)"
                >
                  <path
                    id="Path_1122"
                    data-name="Path 1122"
                    d="M5201,716.484h12.351"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_1123"
                    data-name="Path 1123"
                    d="M5209.648,712.539l4.164,4.163-4.164,4.164"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </span>

            <span onClick={() => this.state.nav3.slickPrev()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.521"
                height="9.034"
                viewBox="0 0 13.521 9.034"
              >
                <g
                  id="Group_10817"
                  data-name="Group 10817"
                  transform="translate(0.707 0.354)"
                >
                  <path
                    id="Path_1122"
                    data-name="Path 1122"
                    d="M5213.348,716.484H5201"
                    transform="translate(-5200.533 -712.539)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_1123"
                    data-name="Path 1123"
                    d="M5213.812,712.539l-4.163,4.163,4.163,4.163"
                    transform="translate(-5209.648 -712.539)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
