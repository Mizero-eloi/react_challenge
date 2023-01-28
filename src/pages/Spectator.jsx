import React from "react";
import CoinFlip from "../components/coinFlip/CoinFlip";
import Footer from "../components/Footer/Footer";

const Spectator = () => {
  return (
    <div>
      {/* Coin flip */}
      <CoinFlip />
      <Footer />
    </div>
  );
};

export default Spectator;
