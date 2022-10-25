import React, { useState } from "react";
import Head from "next/head";
import classes from "../../styles/pages/contact.module.scss";
import BaseLayout from "../../components/layout";

const Contact = () => {
  const [showTextArea, setShowTextArea] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>Contact us - Agrim</title>
        <meta
          name="description"
          content="Do you have a question, or a project you need help with?"
        />
      </Head>
      <BaseLayout>
        <section className={classes.contact}>
          <div className={`container ${classes.contactUs}`}>
            <h1 className={classes.contactUs__heading}>
              Cambridge Institute Of Technology
            </h1>

            <p className={classes.contactUs__subHeading}>
              Project on Waste Management System
            </p>

            <div className={classes.formWrapper}>
              <form className={classes.contactUs__form}>
                <div className={classes.contactUs__form_firstRow}>
                  <div className={classes.nameField}>
                    <label className={classes.contactUsLabel}>
                      {" "}
                      Name : Sunidhi Pathak{" "}
                    </label>
                  </div>

                  <div className={classes.nameField}>
                    <label className={classes.contactUsLabel}> Email </label>
                  </div>
                </div>

                <div className={`${classes.textareaDiv} ${classes.nameField}`}>
                  {/* <label className={classes.contactUsLabel}> message </label> */}

                  {showTextArea && (
                    <textarea className={classes.textarea}></textarea>
                  )}

                  {!showTextArea && (
                    <div
                      className={classes.autoTyped}
                      onClick={(prev) => setShowTextArea(prev)}
                    >
                      <p className={classes.typeTxt}> Hello everyone </p>
                    </div>
                  )}
                </div>
              </form>

              <div className={classes.contactImg}>
                <img src="./icons/cit.webp" alt="contact-us" />
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Contact;
