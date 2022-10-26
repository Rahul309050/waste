import React, { useEffect, useRef } from "react";
import BaseLayout from "../components/layout/index";
import classes from "../styles/pages/chapter3.module.scss";
import Thirdsec from "../components/ch3_3rdsec";
import Experts from "../components/home/Experts/Experts2";


import Head from "next/head";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Waste Management</title>
        <meta name="description" />
      </Head>
      <BaseLayout>
        <section className={classes.firstSec}>
          <div className={classes.firstSec__right}>
            <lottie-player
              autoplay
              loop
              src="/lottie/84755-environmental-plan.json"
              style={{ width: "100%", height: "100%" }}
              mode="normal"
            ></lottie-player>
          </div>
          <div className={`container ${classes.firstSec__content}`}>
            <div className={classes.firstSec__content__left}>
              <h2 className={classes.landingTitle1}>Chapter : 3</h2>

              <h2 className={classes.landingTitle}>
                What is waste ?{" "}
                <a> (Remember you learnt in your first class) </a>
              </h2>
              <p className={classes.landingDesc}>
                Items whose utility has ended for example after drinking the
                juice in the plastic bottle, is a waste to that particular
                person. The plastic bottle dropped in a right bin becomes the
                raw material for the recycler. Scientifically nothing is waste
                and everything can be recycled or processed when put in a right
                bin.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.secondSec}>
          <div className={` container ${classes.secondSec__content}`} >
            <Experts />
          </div>
        </section>    
            <Thirdsec />
      </BaseLayout>
    </React.Fragment>
  );
};

export default Home;
