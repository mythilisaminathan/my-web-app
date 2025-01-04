import React from "react";
import "./About.css";
import themePattern from "../../assets/theme_pattern.svg"; 
import Counter from "../About/count";
import girl from "../../assets/girl.png"; 

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h2>About Me</h2>
        <img src={themePattern} alt="Theme Pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={girl} alt="Mythili" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in{" "}
              <span className="span">
                HTML, CSS, SCSS, JavaScript, React and Tailwind.
              </span>{" "}
              I excel in designing and maintaining responsive websites that
              offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.
              Additionally, I actively participate in coding contests to
              continually refine my skills.
            </p>
            <p>
              {" "}
              I am also a team player who thrives in collaborating with
              cross-functional teams to produce outstanding web applications.{" "}
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul>
              <li><i>▹</i>Javascript(ES+)</li>
              <li><i>▹</i>Redux Toolkit</li>                            
              <li><i>▹</i>SaaS</li>
              <li><i>▹</i>Bootstrap</li>
              
              <li><i>▹</i>Rest API</li>

             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
