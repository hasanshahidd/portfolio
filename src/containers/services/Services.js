import React, {useContext} from "react";
import "./Services.scss";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import {servicesSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Services() {
  const {isDark} = useContext(StyleContext);
  
  if (!servicesSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="services">
        <div className="services-header-div">
          <Fade bottom duration={1000} distance="20px">
            <h1 className={isDark ? "dark-mode services-heading" : "services-heading"}>
              {servicesSection.title}
            </h1>
            <p className={isDark ? "dark-mode services-subtitle" : "services-subtitle"}>
              {servicesSection.subTitle}
            </p>
          </Fade>
        </div>
        <div className="services-cards-div">
          {servicesSection.services.map((service, index) => (
            <Fade bottom duration={1000} distance="20px" key={index}>
              <ServiceCard service={service} />
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
}
