import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/png_bamboo_5412.png";
import Common from "./Common";
function About() {
  return (
    <>
      <Common name='Welcome to About Page' imgsrc={web} visit="/contact" btname="Contact Now"/>
    </>
  );
}

export default About;
