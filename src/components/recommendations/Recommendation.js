import React from "react";
const axios = require("axios");

export default class Recommendation extends React.Component {
  state = {
    loading: true,
    subjects: [],
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://edtech-dj.herokuapp.com/api/subject-list/",
      {
        params: {
          page: 1,
          page_size: 100,
        },
      }
    );
    const results = res.data.results;
    this.setState({ subjects: results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="main_content_body">
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
        </div>
      );
    }

    return (
      <div className="main_content_body">
        {this.state.subjects.map((subject) => (
          <div className="gd-fs">
            <i className="bx bxs-folder"></i>
            <span className="gd-fs-n" style={{ marginLeft: "10px" }}>
              {subject.subject_code}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
