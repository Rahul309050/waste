import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/main.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import LoadingScreen from "../components/UI/loadingScreen/LoadingScreen";


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 4000);
  }, []);

  return (
    <>

            {!isLoading ? (
              <motion.div
                initial={{ height: "0", y: "0vh" }}
                animate={{ height: "100vh", y: "-100vh" }}
                transition={{
                  ease: "easeIn",
                  duration: 1,
                  delay: 3,
                }}
              >
                <LoadingScreen />
              </motion.div>
            ) : (
              <Component {...pageProps} />
            )}

    </>
  );
}

export default MyApp;
