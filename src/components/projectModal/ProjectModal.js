import React, {useContext, useEffect} from "react";
import "./ProjectModal.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectModal({project, onClose}) {
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className={isDark ? "project-modal-overlay dark-mode" : "project-modal-overlay"}
      onClick={onClose}
    >
      <div
        className={isDark ? "project-modal dark-mode" : "project-modal"}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="project-modal-image-wrapper">
          <img
            src={project.image}
            alt={project.projectName}
            className="project-modal-image"
          />
        </div>

        <div className="project-modal-body">
          <h2 className="project-modal-title">{project.projectName}</h2>

          <p className="project-modal-description">
            {project.longDescription || project.projectDesc}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="project-modal-section">
              <h3>Key Highlights</h3>
              <ul className="project-modal-highlights">
                {project.highlights.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="project-modal-section">
              <h3>Tech Stack</h3>
              <div className="project-modal-tags">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="project-modal-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
