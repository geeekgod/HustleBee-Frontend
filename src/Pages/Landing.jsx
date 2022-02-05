import React, { memo } from "react";
import LandingPg from "../Components/BeforeLogin/LandingPg";
import NavbarBefore from "../Components/BeforeLogin/Navbar/NavbarBefore";
import { beforeHomeObj } from "../Components/BeforeLogin/LandingPg/Data";

import Categories from "../Components/BeforeLogin/Categories";
import LandingCTA from "../Components/BeforeLogin/LandingCTA";
import Footer from "../Components/BeforeLogin/Footer";

const Landing = ({ matches }) => {
  return (
    <>
      <NavbarBefore matches={matches} />
      <LandingPg {...beforeHomeObj} />
      <Categories />
      <LandingCTA />
      <Footer />
    </>
  );
};

export default memo(Landing);
