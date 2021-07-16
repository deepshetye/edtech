import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Auth";
const axios = require("axios");

const Portion = () => {
  const { currentUserData } = useContext(AuthContext);

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSubjects = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}subject-list/?year=${currentUserData[2].value}`,
        {
          params: {
            page: 1,
            page_size: 100,
          },
        }
      )
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
          {subjects.map((subject) =>
            subject.portions.map((portion) => {
              if (portion.college == currentUserData[0].value) {
                return (
                  <a href={portion.link} target="_blank">
                    <div className="gd-fs gd-fs-elm" key={subject.subject_code}>
                      <i className="bx bxs-folder"></i>
                      <span
                        className="gd-fs-n"
                        style={{ marginLeft: "10px" }}
                        className="gd-fs-elm"
                      >
                        {subject.subject_code}
                      </span>
                    </div>
                  </a>
                );
              }
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Portion;
