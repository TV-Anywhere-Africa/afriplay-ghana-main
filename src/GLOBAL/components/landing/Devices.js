import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Family.scss";
import devices from "../../../assets/device-mockup.png"
import playStore from "../../../assets/apple-store-icon.png"
import appStore from "../../../assets/android-store.png"

const Devices = () => {
  const navigate = useNavigate();
  const handleWatchNowClick = () => {
    navigate("/signup");
  };
  return (
    <div className="family">
      <div className="container">
        <div className="inside-family">
          <div className="picture">
            <img src={devices} alt="family-afriplay" />
          </div>
          <div className="texts">
            <h1>All Your Devices</h1>
            <p>Stream movies, series, live Channels entertainment, across all your devices from one subscription. From GHC5.</p>
            <div className="store-icons">
              <img style={{ width: "180px" }} src={playStore} alt='android-store' />
              <img src={appStore} alt='apple-store' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
