import React, { useEffect, useRef } from "react";
import BaseLayout from "../components/layout/index";
import classes from "../styles/pages/chapter4.module.scss";
import Secondsec from "../components/ch2_2ndsec"
import Thirdsec from "../components/ch2_3rdsec"

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
                src="/lottie/117785-factory-pollution-city-air-and-water.json"
                style={{ width: "100%", height: "100%" }}
                mode="normal"
              ></lottie-player>
            </div>
          <div className={`container ${classes.firstSec__content}`}>
            <div className={classes.firstSec__content__left}>
              <h2 className={classes.landingTitle1}>Chapter : 4</h2>

              <h2 className={classes.landingTitle}>
                What is happining to our waste ?
              </h2>
              <p className={classes.landingDesc}>
                The waste humans generate waste has been detrimental to our
                environment for quite some time now. Humans are generating too
                much trash and cannot deal with it in a sustainable way. Waste
                that is not biodegradable and cannot be properly be recycled is
                filling our oceans and landfills.
              </p>
            </div>
         
          </div>
        </section>
        <Secondsec/>
        <Thirdsec/>

       

  
  
      </BaseLayout>
    </React.Fragment>
  );
};

export default Home;
