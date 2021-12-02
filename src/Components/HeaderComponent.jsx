import React from "react";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="logo_wrapper">
          <div className="logo_image ">
            <img src="../../images/logo.svg" alt="logo" />
          </div>
          <div className="logo_caption">buy please</div>
        </div>
        <div className="search_field">
          <input
            className="seacrch-field_input"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="authorization_wrapper">log in</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
