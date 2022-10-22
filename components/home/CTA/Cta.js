import { useState, useEffect } from "react";
import style from "@/styles/components/Cta.module.scss";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const options = [
  {
    value: "Digital & Cloud Services",
    label: "Digital & Cloud Services",
  },
  {
    value: "Cyber Security Services",
    label: "Cyber Security Services",
  },
  {
    value: "Skills AdvantEdgeTM",
    label: "Skills AdvantEdgeTM",
  },

  {
    value: "Others (Please specify in the message)",
    label: "Others (Please specify in the message)",
  },
];

const groupedOptions = [
  {
    label: "What do you need help with? Please choose one. ",
    options: options,
  },
];

const CTA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    reValidateMode: "onChange",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const customStyle = {
    control: (base, state) => ({
      ...base,
      borderRadius: "0",
      borderWidth: "1px",
      borderColor: "#fff",
      borderBottom: "1px solid #fff",
      color: "#0F0F0F",
      backgroundColor: "transparent",
      fontSize: "20px",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      boxShadow: "none",
      height: "55px",
      // marginBottom: "2rem",
      fontFamily: "ak-light",
      cursor: "pointer",

      "&:hover": {
        borderColor: "none",
      },
    }),

    placeholder: (base, state) => ({
      ...base,
      color: "#FFFFFF",
      backgroundColor: "transparent",
      textTransform: "capitalise",
      paddingBottom: "10px",
    }),
    indicatorSeparator: (base, state) => ({
      display: "none",
    }),
    indicatorsContainer: (base, state) => ({
      ...base,
      paddingBottom: "10px",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#fff",
      fontSize: "50px",

      "&:hover": {
        color: "#fff",
      },
    }),

    groupHeading: (base, state) => ({
      ...base,
      fontSize: "22px",
      fontFamily: "ak-med",
      textTransform: "initial",
      color: "#0f0f0f",
      padding: "5px 10px 10px 10px",
    }),

    option: (base, state) => ({
      ...base,
      outline: "none",
      display: "flex",
      alignItem: "center",
      height: "55px",
      border: "none",
      fontSize: "18px",
      borderTop: "1px solid #CDCCCC",
      fontFamily: "ak-light",
      padding: "15px 10px 10px 10px",
      cursor: "pointer",
      color: state.isSelected ? "#fff" : "#000",
      backgroundColor: state.isSelected ? "#0B0754" : "#fff",
      "&:hover": {
        color: "#fff",
        backgroundColor: "#0B0754",
      },
    }),
    menu: (base, state) => ({
      ...base,
      borderRadius: "0",
      border: "1px solid #C8B8A0",
      backgroundColor: "#fff",
      color: "#0B0754",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "#fff",
      // paddingBottom: "10px",
    }),
  };

  const sendFormData = (formData) => {
    setIsLoading(true);

    var template_params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      service: formData.service.value,
    };

    emailjs
      .send(
        "service_qpd542j",
        "template_uahhsyk",
        template_params,
        "fm2uwsZWMiiEPROfV"
      )
      .then(
        function (response) {
          if (response.status === 200) {
            setIsLoading(false);
            setStatus("SUCCESS");

            reset({
              name: "",
              email: "",
              service: [],
              message: "",
            });
          }
        },
        function (error) {
          setIsLoading(false);
          setStatus("");
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <div className={style.cta}>
      <div className={style["cta__left"]}>
        <h3>Get A Free Assessment</h3>
        <p>
          Want to understand the digital health of your business?
          <br /> Request a free 30 minutes slot with our expert.
        </p>
      </div>
      <div className={style["cta__form"]}>
        <form onSubmit={handleSubmit(sendFormData)}>
          <div className={style.inputContainer}>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />

            {errors.name && <p className="errorText"> Full Name is required</p>}
          </div>

          <div className={style.inputContainer}>
            <input
              {...register("email", {
                required: true,
                maxLength: 50,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="email"
              id="email"
              name="email"
              placeholder="Your E-mail"
            />

            {errors.email && (
              <>
                {errors.email?.type === "required" && (
                  <p className="errorText">Email is required</p>
                )}
                {errors.email?.type === "maxLength" && (
                  <p className="errorText">Email is invalid</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="errorText">Email is invalid</p>
                )}
              </>
            )}
          </div>

          <div className={style.inputContainer}>
            <Controller
              name="service"
              rules={{ required: true }}
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    {...field}
                    className={style.select}
                    placeholder="What do you need help with?"
                    options={groupedOptions}
                    closeMenuOnSelect={true}
                    styles={customStyle}
                    isSearchable={false}
                  />
                );
              }}
            />
            {errors?.service && errors.service.type === "required" && (
              <p className="errorText">This field is required</p>
            )}
          </div>

          <div className={style.inputContainer}>
            <textarea
              {...register("message", { required: true })}
              name="message"
              placeholder="Your message for us.."
              rows="4"
              cols="50"
            ></textarea>

            {errors.message && <p className="errorText">Message is required</p>}
          </div>

          <button type="submit">
            {isLoading ? (
              <div className="loaderBtn">
                <div className="loaderBtn--dot"></div>
                <div className="loaderBtn--dot"></div>
                <div className="loaderBtn--dot"></div>
                <div className="loaderBtn--dot"></div>
              </div>
            ) : (
              <span> Submit </span>
            )}
          </button>
        </form>
      </div>

      {status && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className={style.successMsg}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={style.successMsg__text}
          >
            Thank you !, <br /> we will be in touch soon
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default CTA;
