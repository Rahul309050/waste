import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./header";

const BaseLayout = ({
  title = "waste Management",
  description = "",
  hideFooter = false,
  ...props
}) => {
  const router = useRouter();

  const [headerMotion, setHeaderMotion] = useState("");

  useEffect(() => {
    setHeaderMotion(router.pathname);
  }, [router]);

  return (
    <>
      {headerMotion === "/" && window.innerWidth >= "320px" ? (
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.3,
          }}
        >
          <Header />
        </motion.div>
      ) : (
        <Header />
      )}

      <motion.main
        initial={{
          opacity: 0,
          // y: "200",
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
          delay: 0.1,
        }}
      >
        {props.children}
      </motion.main>
      {/* 
      <motion.div
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: "-100vh" }}
        transition={{
          ease: "easeInOut",
          duration: -0.3,
          delay: 0.1,
        }}
        className="home-overlay"
      ></motion.div> */}

    </>
  );
};

export default BaseLayout;
