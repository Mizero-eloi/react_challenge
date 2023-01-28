import React from "react";
import footerLogo from "./FooterLogo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3">
      <img src={footerLogo} className="m-auto" alt="logo footer" />
      <p className="align-middle text-white text-center uppercase w-[56%] m-auto">
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit amet,
      </p>
      <p className="text-gray-600 text-xs w-[70%] m-auto text-center">
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,{" "}
      </p>
    </div>
  );
};

export default Footer;
