import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {
        Resume.work.map(item => {
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
          content.push(Resume.work.filter(work => new Date(work.startDate).getFullYear() === year).map((item, j) => {
            return (
              <TimelineItem
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
                company={item.company}
                department={item.department}
                location={item.location}
                image={item.image}
                position={item.position}
                summary={item.summary}
              />
            );
          }));
          return content;
        })
      }
    </div>
  );
}

export default Timeline;
