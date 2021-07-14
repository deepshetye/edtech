import React, { useState, useEffect } from "react";
const axios = require("axios");

const Portion = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSubjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}subject-list/`, {
        params: {
          page: 1,
          page_size: 100,
        },
      })
      .then((res) => {
        const results = res.data.results;
        setSubjects(results);
        setLoading(false);
      });
    return;
  };

  useEffect(() => {
    getSubjects();
  }, []);

  function getPortionLink({ sub }) {
    axios
      .get(`${process.env.REACT_APP_API_URL}portion-list/?subject=MA100`, {
        params: {
          page: 1,
          page_size: 100,
        },
      })
      .then((res) => {
        console.log(sub.subject_code);
        const results = res.data.results;
        console.log(res);
      });
    return;
  }

  return (
    <div className="main_content_body">
      {loading ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            height: "inherit",
            alignItems: "center",
          }}
        >
          Loading.....
        </h1>
      ) : (
        <div id="textbook-block">
          <h6 style={{ margin: "15px 20px", color: "rgb(32 31 33)" }}>
            SUBJECTS
            <hr style={{ marginTop: "7px" }} />
          </h6>
          {subjects.map((subject) => (
            <div className="gd-fs gd-fs-elm" key={subject.subject_code}>
              <a onClick={() => getPortionLink(subject.subject_code)}>
                <i className="bx bxs-folder"></i>
                <span
                  className="gd-fs-n"
                  style={{ marginLeft: "10px" }}
                  className="gd-fs-elm"
                >
                  {subject.subject_code}
                </span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portion;