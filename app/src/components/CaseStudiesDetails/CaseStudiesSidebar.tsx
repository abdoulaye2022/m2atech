"use client";
  
import React from "react";

const CaseStudiesSidebar: React.FC = () => {
  return (
    <>
      <div className="case-studies-sidebar-sticky">
        <div className="case-studies-details-info">
          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-user-pin"></i>
              </div>
              <span>Client:</span>
              <a href="https://envytheme.com/" target="_blank">
                EnvyTheme.com
              </a>
              <a href="#" target="_blank">
                ThemeForest.com
              </a>
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              New York, USA
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-purchase-tag"></i>
              </div>
              <span>Technologies:</span>
              Python, Data Science
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-check"></i>
              </div>
              <span>Completed:</span>
              28 April 2023
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-globe"></i>
              </div>
              <span>Website:</span>
              <a href="https://envytheme.com/" target="_blank">
                EnvyTheme.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesSidebar;
