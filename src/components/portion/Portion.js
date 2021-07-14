import React, { useState, useEffect } from "react";
const axios = require("axios");

const Portion = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSubjects = () => {
    axios
      .get("https://edtech-dj.herokuapp.com/api/subject-list/", {
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
      .get(`https://edtech-dj.herokuapp.com/api/portion-list/?subject=MA100`, {
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

// CLASS COMPONENT

// export default class Portion extends React.Component {

//     state = {
//         loading: true,
//         subjects: []
//     }

//     async componentDidMount() {
//       const res = await axios
//       .get("https://edtech-dj.herokuapp.com/api/subject-list/", {
//         params: {
//           page: 1,
//           page_size: 100,
//         },
//       })
//       const results = res.data.results;
//       this.setState({ subjects: results, loading: false});
//   }

//   render() {

//     if(this.state.loading){
//         return <div className="main_content_body">
//         <h1 style={{
//           display: "flex",
//           justifyContent: 'center',
//           height: 'inherit',
//           alignItems: 'center',
//         }}>
//           Loading.....
//         </h1>
//       </div>
//     }

//     return(
//         <div className="main_content_body">
//             {this.state.subjects.map(subject => (
//                 <div className="gd-fs">
//                     <i className='bx bxs-folder'></i>
//                     <span className="gd-fs-n" style={{marginLeft: "10px"}}>{subject.subject_code}</span>
//                 </div>
//             ))}
//         </div>
//     )
//   }
// }
