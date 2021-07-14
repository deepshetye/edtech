import React, { useEffect, useState } from "react";
const axios = require("axios");

const About = () => {
  const [collegeName, setCollegeName] = useState(null);

  const getSubjects = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}college-list/?college_code=NITG`,
        {
          params: {
            page: 1,
            page_size: 100,
          },
        }
      )
      .then((res) => {
        const results = res.data.results;
        // setSubjects(results)
        setCollegeName(results[0].link_image);
        // console.log(results[0]);
        // setLoading(false);
      });
    return;
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div
      className="main_content_body"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={collegeName} />
      <div style={{ marginTop: "10px", fontSize: "x-large", textAlign: 'center' }}>
        National Institute of Technology, Goa
      </div>
      <h5>EST. 2010</h5>
      <div style={{ marginTop: "5px" }}>Ponda, Goa</div>
      <div style={{marginTop: '20px'}}>
        <a href="http://www.nitgoa.ac.in/" target="_blank" ><i className="bx bx-link" style={{ color: "black", fontSize: '1.5rem', padding: '0 10px' }} /></a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=social@nitgoa.ac.in" target="_blank" ><i className="bx bx-mail-send" style={{ color: "black", fontSize: '1.5rem', padding: '0 10px' }} /></a>
        <a href="https://www.linkedin.com/school/nitgoa/" target="_blank" ><i className="bx bxl-linkedin" style={{ color: "black", fontSize: '1.5rem' , padding: '0 10px'}} /></a>
        <a href="https://www.instagram.com/nitgoa/" target="_blank" ><i className="bx bxl-instagram" style={{ color: "black", fontSize: '1.5rem', padding: '0 10px' }} /></a>
        <a href="https://www.facebook.com/nitgoa/" target="_blank"><i className="bx bxl-facebook" style={{ color: "black",  fontSize: '1.5rem', padding: '0 10px' }} /></a>
        <a href="https://twitter.com/NITGoa_Official" target="_blank" ><i className="bx bxl-twitter" style={{ color: "black",  fontSize: '1.5rem', padding: '0 10px' }} /></a>
        <a href="https://www.youtube.com/channel/UCEbSKyfa83t6AU1yk0sp2Jg" target="_blank" ><i className="bx bxl-youtube" style={{ color: "black",  fontSize: '1.5rem', padding: '0 10px' }} /></a>
      </div>
      <div
        style={{
          width: "100%",
          height: "50vh",
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.3364528224847!2d73.97591271485012!3d15.41238168928966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba54fee1f1cd%3A0xea0a4948645fa299!2sNational%20Institute%20of%20Technology%20Goa!5e0!3m2!1sen!2sin!4v1626261014284!5m2!1sen!2sin"
          style={{
            width: "85%",
            height: "85%",
            border: "0",
            allowfullscreen: "",
            loading: "lazy",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default About;
