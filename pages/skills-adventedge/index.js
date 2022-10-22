import React, { useState } from "react";
import Head from "next/head";
import BaseLayout from "@/components/layout";
import classes from "@/styles/pages/cloud.module.scss";
import SkillsNavigation from "@/components/layout/Navigation/SkillsNav";
import HeroSection from "@/components/Cloud/HeroSecttion";
import ReadyToWork from "@/components/layout/readyToWork";
import { skillAdvantedgeData } from "@/components/Cloud/Services/ServiceItemdata";
import { skillAdvantedgeServices } from "@/components/Cloud/Digital&Cloud/digital&CloudData";
import DigitalAndCloud from "@/components/Cloud/Digital&Cloud/DigitalAndCloud";
import { ButtonPurple } from "@/components/UI/Button";
import { SkillAdvContext } from "./context/skillAdv";
import DigitalAndCloudMob from "@/components/Cloud/Digital&Cloud/DigitalAndCloudMob";
import Recruit from "@/components/skillAdv/Recruit";
import ButtonGradient from "@/components/UI/Button";
import EnquiryForm from "@/components/enquiryForm";

const skillAdvNavigationItems = [
  { id: "pm", text: "Program Management" },
  { id: "sod", text: "Skill On Demand" },
  { id: "vc", text: "vCISO" },
];

const servicesItem = [
  {
    id: 1,
    icon: "/images/skills_advantedge/service/IT_operations.svg",
    title: "IT Operations",
  },
  {
    id: 2,
    icon: "/images/skills_advantedge/service/Digital_Program.svg",
    title: "Digital Program Management",
  },
  {
    id: 3,
    icon: "/images/skills_advantedge/service/Application_development.svg",
    title: "Application Development & Modernisation",
  },
  {
    id: 4,
    icon: "/images/skills_advantedge/service/Cloud_adoption.svg",
    title: "Cloud Adoption",
  },
  {
    id: 5,
    icon: "/images/skills_advantedge/service/Project_management.svg",
    title: "Project Management",
  },
];

const evaProcess = [
  {
    id: 1,
    icon: "/images/skills_advantedge/Pre_screening.svg",
    title: "Pre-Screening",
    description:
      "Each applicant is carefully reviewed by our experts using the Skills Advantedge™ Framework. Only candidates that meet the customer requirements are interviewed by the domain expert panel at Agrim.",
  },
  {
    id: 2,
    icon: "/images/skills_advantedge/Skills_evaluation.svg",
    title: "Skill Evaluation",
    description:
      "Customer-specific skill set requirements are evaluated by Agrim expert panel",
  },
  {
    id: 3,
    icon: "/images/skills_advantedge/Background_verification.svg",
    title: "Background Verification",
    description:
      "References? Employment suitability? Verified by the Agrim Skills Advantedge™ process",
  },
];

const SkillsAdventedge = () => {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleShowForm = (e) => {
    console.log(e.target.innerText);

    if (e.target.innerText === "Start Transformation With Right Team") {
      setFormTitle(
        `We're happy to help you get the right team! Fill out this form and we'll be in contact soon.`
      );
    }

    if (e.target.innerText === "Let's work together") {
      setFormTitle(
        `We're glad to see you here. Fill out this form and we'll be in contact soon.`
      );
    }

    setShowForm(true);
  };

  const onToggle = () => {
    setShowForm(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Skills AdvantEdge - Agrim</title>
        <meta
          name="description"
          content="Often, the difference between the vision of a digital enterprise and making it happen is TALENT. Agrim’s Skills Advantedge™ provides temporary technical staffing, right-to-hire, and direct permanent staff across the Nordic region."
        />
      </Head>
      <BaseLayout>
        <SkillsNavigation />

        <section className={classes.firstSec}>
          <div className={` ${classes.firstSec__content}`}>
            <HeroSection
              title="Skills AdvantEdge&trade;"
              sub_title="Often, the difference between the vision of a digital enterprise and making it happen is TALENT. Agrim’s Skills Advantedge™ provides temporary technical staffing, right-to-hire, and direct permanent staff across the Nordic region."
              bg="/video/SkillsAdv-vid.mp4"
              poster="/video/skills_advantedge_cover.jpg"
            />
          </div>
        </section>

        <section className={classes.recruitSec}>
          <div className={`container ${classes.recruitSec__content}`}>
            <Recruit handleShowForm={handleShowForm} onToggle={onToggle} />
          </div>
        </section>

        <section className={classes.endToEnd}>
          <div className={`${classes.endToEnd__content}`}>
            <div className={`container  ${classes.endToEnd__content_one}`}>
              <p>SKILLS ADVANTEDGE&trade;</p>
              <h3>
                We are your end-to-end talent acquisition partner delivering
                optimum talent across various digital technology roles in:
              </h3>
            </div>
          </div>

          <div className={classes.serviceContainer}>
            <div className={`container ${classes.serviceContainer__content}`}>
              {servicesItem.map((item) => {
                return (
                  <div key={item.id} className={classes.serviceItem}>
                    <img src={item.icon} alt={item.title} />
                    <h4> {item.title} </h4>
                  </div>
                );
              })}

              <div className={classes.button}>
                <ButtonGradient handleShowForm={handleShowForm} />
              </div>
            </div>
          </div>
        </section>

        <section className={classes.fourthSec} id="skillsAdvOff">
          <div className={`container ${classes.fourthSec__content}`}>
            {/* <DigitalAndCloudProvider> */}

            <h2 className={classes.section_title}>
              Skills Advantedge&trade; Offerings
            </h2>

            <p className={classes.getInTouch} onClick={handleShowForm}>
              Get In Touch
            </p>

            <div className={classes.fourthSec__content_desktop}>
              <DigitalAndCloud
                titleColor="rgb(85, 53, 195)"
                section_title="Skills Advantedge&trade; Offerings"
                digitalAndCloudServices={skillAdvantedgeServices}
                digitalAndCloudNavigationItems={skillAdvNavigationItems}
                context={SkillAdvContext}
                handleShowForm={handleShowForm}
              />
            </div>

            <div className={classes.fourthSec__content_mob}>
              <DigitalAndCloudMob
                digitalAndCloudServices={skillAdvantedgeServices}
                handleShowForm={handleShowForm}
              />
            </div>

            <p className={classes.getInTouch} onClick={handleShowForm}>
              Get In Touch
            </p>
            {/* </DigitalAndCloudProvider> */}
          </div>
        </section>

        <section className={classes.evaluationProcess}>
          <div className={`container ${classes.evaluationProcess__content}`}>
            <p className={classes.heading}>Our Evaluation Process</p>
            <h2 className={classes.title}>
              Our thorough evaluation process is designed to screen suitable
              candidates before you even interview them through
            </h2>

            <p className={classes.description}>
              With our deep expertise and experience in the skills domain, we
              have what it takes to attract highly qualified, high-quality
              candidates. Allow us to take over the responsibility of finding
              the right technical talent for you. And make digital
              transformation happen!
            </p>

            <div className={classes.listItems}>
              {evaProcess.map((item) => {
                return (
                  <div key={item.id} className={classes.listItems__item}>
                    <img src={item.icon} alt={item.title} />
                    <h4 className={classes.title}> {item.title} </h4>
                    <p className={classes.description}> {item.description} </p>
                  </div>
                );
              })}
            </div>

            <div className={classes.sectionButton}>
              <p onClick={handleShowForm}>Talk To Our Expert</p>
            </div>
          </div>
        </section>

        <section className={classes.preFooter}>
          <ReadyToWork
            bgColor="#5C2DCC"
            title="Start Transformation With Right Team"
            iconBg="#A652FF"
            handleShowForm={handleShowForm}
          />
        </section>

        {showForm && <EnquiryForm onToggle={onToggle} formTitle={formTitle} />}
      </BaseLayout>
    </React.Fragment>
  );
};

export default SkillsAdventedge;
