import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import github from "../../assets/github.png";
import edit from "../../assets/edit.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h2>Other Networthy Projects</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <div className="service">
                <h3>{service.s_no}</h3>
                <div className="service-icons">
                  {service.githubLink && (
                    <a
                      href={service.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub Link" />
                    </a>
                  )}
                  {service.livelink && (
                    <a
                      href={service.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={edit} alt="Live Project Link" />
                    </a>
                  )}
                </div>
              </div>

              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <pre>{service.s_tech}</pre>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
