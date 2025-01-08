import React from 'react';
import './Hero.css';
import girl from "../../assets/girl.png";
import resume from "../../assets/resume.pdf"; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume; 
    link.download = 'resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
      <img src={girl} alt="" className='profile-img' />
      <h2 className='hero-text'>I'm <span>Mythili Saminathan,</span> Frontend developer</h2>
      <p>
        As a frontend developer from India, I bring over a year of expertise in React.js and JavaScript, leveraging these skills to craft dynamic and user-centric web applications. Passionate about pushing the boundaries of front-end development, I thrive on tackling challenges and delivering innovative solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownload}>
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
