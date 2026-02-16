import React, {useState, useContext} from "react";
import "./ServiceCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ServiceCard({service}) {
  const {isDark} = useContext(StyleContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={isDark ? "service-card-dark" : "service-card"}
      onClick={toggleExpand}
    >
      <div className="service-card-header">
        <div className="service-icon">
          <i className={service.iconClass}></i>
        </div>
        <div className="service-title-container">
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
        <div className={`expand-icon ${isExpanded ? "expanded" : ""}`}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      {isExpanded && (
        <div className="service-details">
          <div className="service-details-content">
            <h4>What I Deliver:</h4>
            <ul className="service-details-list">
              {service.details.map((detail, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="service-technologies">
              <h4>Technologies & Tools:</h4>
              <div className="tech-tags">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
