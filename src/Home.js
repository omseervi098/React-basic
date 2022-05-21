import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/png_bamboo_5412.png";
import Common from "./Common";
function Home() {
  return (
    <>
      <Common name='Grow ur Business with' imgsrc={web} visit="/service" btname="Get Started"/>
    </>
  );
}

export default Home;
