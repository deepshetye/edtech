import React, { useEffect } from "react";

const Timetable = () => {
  let ttlink = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRuHaQaxEpW1LGZ2QM42LdbpIvr1w9iAmOMOKOIMHMJCvAQmsk2BH5KsQ_M_Um63vpiITYZZiz9w3n6/pubhtml?widget=true&amp;headers=false"

  return (
    <div className="main_content_body" style={{display: "flex", justifyContent: 'center'}}>
      <iframe src={ttlink}
        style={{
          height: '50%',
          width: '70%',
          border: '0.5px solid var(--first-color)'
        }}
      />
    </div>
  );
};

export default Timetable;