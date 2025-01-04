import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import github from "../../assets/github.png";
import edit from "../../assets/edit.png";


const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h2>Some Things I've Built</h2>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="card">
            <img
              src={work.w_img}
              alt={work.w_name}
              className="card-img"
            />
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">{work.w_name}</h3>
                <div className="card-icons">
                  <a href={work.githubLink} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="icon" />
                  </a>
                  <a href={work.liveLink} target="_blank" rel="noopener noreferrer">
                    <img src={edit} alt="Live" className="icon" />
                  </a>
                </div>
              </div>
              <p className="card-text">{work.w_desc}</p>
              <p><b>Technologies</b>:</p>
              <div className="card-tech">
                <pre>{work.w_tech}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
