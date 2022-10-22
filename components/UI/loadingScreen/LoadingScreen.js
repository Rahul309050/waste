import { useEffect } from "react";

const LoadingScreen = () => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div className="loader-container">

          <lottie-player
            className="lottie-loader"
            autoplay
            loop
            // src="https://kurage-assets.s3.ap-south-1.amazonaws.com/agrim/Agrim_loader.json"
            src="/lottie/Agrim_loader.json"
            style={{ height: "50%", width: "50%" }}
            mode="normal"
          ></lottie-player>
        </div>

  );
};

export default LoadingScreen;
