import React from "react";
import CertificationTimelineItem from "./CertificationTimelineItem"
import Resume from "../../resume.json";

function CertificationTimeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item is-success">
        <div className="timeline-marker"></div>
        <div className="timeline-content"></div>
      </div>
      {
        Resume.certifications.map(item => {
          return new Date(item.startDate).getFullYear();
        }).reduce((regyears, currentYear) => {
          if (regyears.indexOf(currentYear) === -1) {
            regyears.push(currentYear)
          }
          return regyears          
        }, []).map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-success">{year}</span>
            </header>
          );
          content.push(Resume.certifications.filter(certifications => new Date(certifications.startDate).getFullYear() === year).map((item, j) => {
            return (
              <CertificationTimelineItem
                key={j}
                startDate={ 
                  new Date(item.startDate).toLocaleString("en-UK", {
                    month: "long",
                    year: "numeric"
                  })
                }
                endDate={
                  new Date(item.endDate).toLocaleString("en-UK", {
                    month: "long",
                    year: "numeric"
                  }).replace("Invalid Date","now")
                }
                institution={item.institution}
                area={item.area}
                image={item.image}
                link={item.link}
                onlinecert={item.onlinecert}
                courses={item.courses}
              />
            );
          }));
          return content;
        })
      }
    </div>
  );
}

export default CertificationTimeline;
