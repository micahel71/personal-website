import React from "react";

function EducationTimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-light is-outlined is-image is-32x32">
        <img src={props.image} alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.startDate} - {props.endDate}</p>
        <h1 className="title is-4">{props.institution}</h1>
        <h3 className="title is-6">{props.area} for {props.studyType}</h3>
        <p style={{ maxWidth: "25em" }}>{props.courses}</p>
      </div>
    </div>
  );
}

export default EducationTimelineItem;
