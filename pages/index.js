import React, { useEffect, useRef } from "react";
import BaseLayout from "../components/layout/index";
import classes from "../styles/pages/home.module.scss";
import { create } from "@lottiefiles/lottie-interactivity";
import Experts from "../components/home/Experts/Experts";
import Needs from "../components/home/Needs/Needs";

import Head from "next/head";
import InteractiveSlider from "../components/InteractiveSlider";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");

    scrollRef.current.addEventListener("load", function () {
      create({
        mode: "scroll",
        player: "#scrollLottie",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 200],
          },
        ],
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Waste Management</title>
        <meta name="description" />
      </Head>
      <BaseLayout>
        <section className={classes.firstSec}>
          <div className={`container ${classes.firstSec__content}`}>
            <div className={classes.firstSec__content__left}>
              <h2 className={classes.landingTitle1}>Chapter : 1</h2>

              <h2 className={classes.landingTitle}>What is Waste?</h2>
              <p className={classes.landingDesc}>
                Items whose utility has ended for example after drinking the
                juice in the plastic bottle, is a waste to that particular
                person. The plastic bottle dropped in a right bin becomes the
                raw material for the recycler. Scientifically nothing is waste
                and everything can be recycled or processed when put in a right
                bin.
              </p>
            </div>
            <div className={classes.firstSec__content__right}>
              <lottie-player
                autoplay
                loop
                src="/lottie/112002-delete-files.json"
                style={{ width: "100%", height: "100%" }}
                mode="normal"
              ></lottie-player>
            </div>
          </div>
        </section>

        <section className={classes.secondSec}>
          <div className={` ${classes.secondSec__content}`}>
            <Experts />
          </div>
        </section>

        <section className={classes.thirdSec}>
          <div className={`container ${classes.thirdSec__content}`}>
            <Needs />
          </div>
          <div className={classes.thirdSec__bgAnimation}>
            <lottie-player
              ref={scrollRef}
              id="scrollLottie"
              mode="scroll"
              src="/lottie/Methodology.json"
              style={{ width: "100%", height: "100%" }}
            ></lottie-player>
          </div>
          <InteractiveSlider />
        </section>
        <section className={classes.lasttSec}>
          <div className={`container ${classes.lasttSec__content}`}>
            <div className={classes.lasttSec__content__left}>
              <h2 className={classes.landingTitle}>
                Waste is mixed and sent to the BBMP vehicle:
              </h2>
              <p className={classes.landingDesc}>
                Here everything is mixed and taken by bbmp. BBMP will dump it in
                the villages and give trouble to them. Have you seen the auto or
                the waste collection lorry, how much it will smell isn't it?
                Imagine I throw this waste next your house everyday what will
                happen. This we shall see in the next class where I shall
                explain how this mixed waste is creating the problem.
              </p>
            </div>
            <div className={classes.lasttSec__content__right}>
              <lottie-player
                autoplay
                loop
                src="/lottie/45858-garbage-collection.json"
                style={{ width: "100%", height: "100%" }}
                mode="normal"
              ></lottie-player>
            </div>
          </div>
        </section>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Home;
