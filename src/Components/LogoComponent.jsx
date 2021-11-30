import React from "react";
import styles from "../StylesForComponents/LogoComponent.css";

const LogoComponent = () => {
  return (
    <div className={"wrapper"}>
      <div className={"logo"}>
        <img src="../../images/logo.svg" alt="logo" />
      </div>
      <div className={"logo_сaption"}>buy please</div>
    </div>
  );
};

export default LogoComponent;
