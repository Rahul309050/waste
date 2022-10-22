import React, { useState } from "react";
import Head from "next/head";
import BaseLayout from "@/components/layout";
import classes from "@/styles/pages/cloud.module.scss";
import CybersecurityNavigation from "@/components/layout/Navigation/CybersecurityNav";
import HeroSection from "@/components/Cloud/HeroSecttion";
import ReadyToWork from "@/components/layout/readyToWork";
import { cyberSecurityData } from "@/components/Cloud/Services/ServiceItemdata";
import { cyberSecurityServices } from "@/components/Cloud/Digital&Cloud/digital&CloudData";
import Services from "@/components/Cloud/Services/Services";
import GetStarted from "@/components/Cloud/GetStarted/GetStarted";
import engineer from "../../public/images/cybersecurity/engineer.png";
import immediateHelp from "../../public/images/cybersecurity/immediateHelp.png";
import dataBreach from "../../public/images/cybersecurity/DataBreach.jpg";
import DigitalAndCloud from "@/components/Cloud/Digital&Cloud/DigitalAndCloud";
import DigitalAndCloudMob from "@/components/Cloud/Digital&Cloud/DigitalAndCloudMob";

import DigitalAndCloudProvider from "@/components/Cloud/context/digital&cloud";
import {
  cybersecurityNavigationItems,
  cybersecBenefitsContent,
} from "@/components/Cloud/Benefits/benefitsData";
import Benefits from "@/components/Cloud/Benefits/Benefits";
import EnquiryForm from "@/components/enquiryForm";
import { cybersecurityAcc } from "@/components/Cloud/data";
import Faq from "@/components/faq";
import { CybersecurityContext } from "./context/cybersecurity";
// import FAQ from "../../components/FAQ/FAQ";

const getStartedItems = [
  {
    id: 1,
    title: "Schedule a consultation",
    text: "Book an appointment with AGRIM Digital & Cloud Services to see how to migrate your business to the Cloud.",
    buttonText: "Let's Talk",
    img: engineer.src,
  },
  {
    id: 2,
    title: "Get immediate help",
    text: "If you’re experiencing a cyber security incident, contact an experienced team ready to help.",
    buttonText: "Act Now",
    img: immediateHelp.src,
  },
  {
    id: 3,
    title: "Learn data breach costs",
    text: "See the 2021 Cost of a Data Breach Report and discover how to mitigate the costs.",
    buttonText: "Begin Estimating",
    img: dataBreach.src,
  },
];

const navigationItems = [
  { id: "sa", text: "Security Assesment" },
  { id: "pts", text: "Phishing & Training Services" },
  { id: "rm", text: "Risk Management" },
  { id: "cm", text: "Compliance Management" },
  { id: "rs", text: "Resilience Services" },
  { id: "tprm", text: "Third Party Risk Management" },
  { id: "irm", text: "IRM Solutions" },
  { id: "iams", text: "Identity & Access Management Solutions" },
];

const CyberSecurity = () => {
  const [accIndex, setAccIndex] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleShowForm = () => {
    setShowForm(true);
  };

  const onToggle = () => {
    setShowForm(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Cyber Security - Agrim</title>
        <meta
          name="description"
          content="Digital enterprises need to be focused on growth, efficiency and collaboration at all times. This can happen only if their people, processes and technology are secure. Agrim helps digital enterprises ensure a secure environment with cutting-edge security services tailored to their needs."
        />
      </Head>

      <BaseLayout>
        <CybersecurityNavigation />

        <section className={classes.firstSec}>
          <div className={`${classes.firstSec__content}`}>
            <HeroSection
              title="Cyber Security & Trust Services"
              sub_title="Digital enterprises need to be focused on growth, efficiency and collaboration at all times. This can happen only if their people, processes and technology are secure. Agrim helps digital enterprises ensure a secure environment with cutting-edge security services tailored to their needs."
              bg="/video/cybersecurity.mp4"
              poster="/video/cybersecurity_cover.jpg"
            />
          </div>
        </section>

        <section className={classes.secondSec}>
          <div className={`${classes.secondSec__content}`}>
            <Services
              section_title="Transform your business and manage risk with Agrim Cyber security Consulting, Cloud and Managed Security Services. We can help you…"
              serviceItemData={cyberSecurityData}
              handleShowForm={handleShowForm}
              setFormTitle={setFormTitle}
            />
          </div>
        </section>

        <section
          style={{ backgroundColor: "#5C2DCC" }}
          className={classes.thirdSec}
        >
          <div className={`container ${classes.thirdSec__content}`}>
            <GetStarted
              getStartedItems={getStartedItems}
              cardBg="#5C2DCC"
              titleColor="#fff"
              handleShowForm={handleShowForm}
            />
          </div>
        </section>

        <section className={classes.fourthSec} id="cybersecurityAndTrust">
          <div className={`container ${classes.fourthSec__content}`}>
            <h2 className={classes.section_title}>
              Cyber Security & Trust Services Offerings
            </h2>

            <p className={classes.getInTouch}> Get In Touch </p>

            {/* <DigitalAndCloudProvider> */}

            <div className={classes.fourthSec__content_desktop}>
              <DigitalAndCloud
                section_title="Cyber Security & Trust Services Offerings"
                // titleColor="#C371FF"
                titleColor="#5535C3"
                digitalAndCloudServices={cyberSecurityServices}
                digitalAndCloudNavigationItems={navigationItems}
                context={CybersecurityContext}
                handleShowForm={handleShowForm}
              />
            </div>

            <div className={classes.fourthSec__content_mob}>
              <DigitalAndCloudMob
                digitalAndCloudServices={cyberSecurityServices}
                handleShowForm={handleShowForm}
              />
            </div>

            <p className={classes.getInTouch}> Get In Touch </p>

            {/* </DigitalAndCloudProvider> */}
          </div>
        </section>

        <section className={classes.fifthSec}>
          <div className={`${classes.fifthSec__content}`}>
            <Benefits
              learnMoreTitle="Agrim Cyber Security Case Studies"
              learnMoreDesc="Discover how we helped organisations assess and secure the threats."
              sectionTitle="How Enterprise Security Solutions Benefit Your Sector"
              cloudNavigationItems={cybersecurityNavigationItems}
              cloudBenefitsContent={cybersecBenefitsContent}
              link="Make Your Business Resilient"
              handleShowForm={handleShowForm}
            />
          </div>
        </section>

        <section className={`${classes.sixthSec} ${classes.cyberSecFaq}`}>
          <div className={`${classes.sixthSec__content} container`}>
            <h4 className={classes.sixthSec__content_title}> FAQs </h4>

            <h2 className={classes.sixthSec__content_subtitle}>
              Cyber Security & Trust Services
            </h2>
            {cybersecurityAcc?.map((e, i) => {
              return (
                <div key={e.id}>
                  <Faq e={e} i={i} setIndex={setAccIndex} index={accIndex} />
                </div>
              );
            })}
          </div>
        </section>

        <section className={classes.preFooter}>
          <ReadyToWork
            bgColor="#5C2DCC"
            title="Start Your Cyber Security Transformation"
            iconBg="#A652FF"
            handleShowForm={handleShowForm}
          />
        </section>
        {showForm && <EnquiryForm onToggle={onToggle} formTitle={formTitle} />}
      </BaseLayout>
    </React.Fragment>
  );
};

export default CyberSecurity;
