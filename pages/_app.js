import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingScreen from "@/components/UI/loadingScreen/LoadingScreen";
import DigitalAndCloudProvider from "@/components/Cloud/context/digital&cloud";
import CybersecurityProvider from "./cyber-security/context/cybersecurity";
import SkillAdvProvider from "./skills-adventedge/context/skillAdv";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 4000);
  }, []);

  return (
    <>
      <DigitalAndCloudProvider>
        <CybersecurityProvider>
          <SkillAdvProvider>
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
          </SkillAdvProvider>
        </CybersecurityProvider>
      </DigitalAndCloudProvider>
	<GoogleAnalytics />
    </>
  );
}

export default MyApp;
