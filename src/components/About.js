import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id = "about">
    <h2>About Me</h2>
    <p>I'm a joker. I'm a smoker. I'm an all day toker.</p>
    <img src = { image } alt = "I made this"/>
  </div>
  )
}

export default About;
