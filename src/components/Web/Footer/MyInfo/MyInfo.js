import React from "react";
import MariLogo from "../../../../assets/img/png/LOGOFREAKY.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={MariLogo} alt="Mari Luz Sanchez" />
      <h4>
        Tienda Online Freaky-Sales.com
      </h4>
      <SocialLink />
    </div>
  );
}