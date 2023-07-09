import React from "react";
import "../components/css/FrontPage.css";
import Logo from "../images/DSCF1898.jpg";
import AboutmeImage from "../images/STRATCHER.jpg";

const Mainpage = () => {
  return (
    <>
      <div className="main-page-wrapper mt-5">
        <div className="welcome">
          <h1>Welcome to my page!</h1>
          <p className="weclome-text">
            Hi! My name is Phuc Huynh Evertsen!
            <br />I am a young researcher whos is passionate about technology,
            innovation and sustainability research
          </p>
        </div>
        <div className="profile-image mt-5">
          <img className="main-image" src={Logo} alt="img" />
        </div>

        <div className="about-me">
          <h2>About me</h2>
          <p className="about-me-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
          <img className="aboutMe-image" src={AboutmeImage} alt="img" />
        </div>
      </div>
    </>
  );
};

export { Mainpage };
