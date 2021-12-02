import React from "react";
import classNames from "classnames";
import MainContentComponent from "./MainContentComponent";

const MainComponent = ({ className }) => {
  return (
    <div className="main">
      <div className={classNames("main_wrapper", className)}>
        <MainContentComponent />
      </div>
      <div className="main_conteiner">
        <div className="main_content-title">Shovel</div>
        <div className="main_content">
          A tool consisting of a wide, square metal or plastic blade, usually
          <br />
          with slightly raised sides, attached to a handle, for moving loose
          <br />
          material such as sand, coal, or snow
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
