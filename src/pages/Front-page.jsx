import React from "react";
import "../components/css/FrontPage.css";
import AboutmeImage from "../images/STRATCHER.jpg";
import techno from "../images/techno.png";
import digitalInnovations from "../images/digitalInnovations.png";
import circularBuissness from "../images/circularBuisness.png";
import innovation from "../images/innovation.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pdf from "../pdf/technologicalForecasting.pdf";

const Mainpage = () => {
  return (
    <>
      <div className="main-page-wrapper mt-5">
        <div className="welcome">
          <h1 className="main-text">Phuc Huynh Evertsen</h1>
          <p className="welcome-text small-text">
            Hi! My name is Phuc Huynh Evertsen!
            <br />I am a young researcher who is passionate about technology,
            innovation and sustainability research
          </p>
        </div>
        <div className="profile-image mt-5">
          <img className="aboutMe-image" src={AboutmeImage} alt="img" />
        </div>

        <div className="about-me">
          <p className="about-me-text small-text">
            Phuc Huynh Evertsen (Pru) is an early-career scholar who has
            recently held a PhD in Business Administration (specialising in
            Innovation and Entrepreneurship) from Nord University, Business
            School. Before that, she took a Master of Sciences in Business
            Administration (specialising in Innovation studies) at the
            University of Stavanger. Pru has published in high-impact journals
            within innovation and entrepreneurship. She was responsible for the
            master course ‘Social and Sustainable Entrepreneurship’, which
            received a positive student evaluation of 4.5/5 rating. Pru also
            served as a guest lecturer for several courses and had research
            visits at Arizona State University, USA and the University of
            Bologna, Italy. Pru is result-oriented, respectful, curious, and a
            fast learner who loves to challenge herself and is open to critical
            feedback for improvements.
          </p>
          {/*  <img className="aboutMe-image" src={AboutmeImage} alt="img" /> */}
        </div>

        <div className="research-papers">
          <h3 className="mb-5 research-text">My research papers</h3>
          <Row xs={1} md={2} lg={2} xl={4} className="g-4 ">
            <Col className="technologicalForecasting">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="RPImage" variant="top" src={techno} />
                <Card.Body>
                  <Card.Title>
                    Commercializing circular economy innovations
                  </Card.Title>
                  <Card.Text className="small-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href={pdf} variant="outline-danger" size="sm">
                    Read paper
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="technologicalForecasting2">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="RPImage"
                  variant="top"
                  src={digitalInnovations}
                />
                <Card.Body>
                  <Card.Title>
                    Digital innovations for the circular eceonomy
                  </Card.Title>
                  <Card.Text className="small-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="outline-danger" size="sm">
                    Read paper
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="technologicalForecasting4">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="RPImage" variant="top" src={innovation} />
                <Card.Body>
                  <Card.Title>Innovations for a circular economy</Card.Title>
                  <Card.Text className="small-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href={pdf} variant="outline-danger" size="sm">
                    Read paper
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="technologicalForecasting3">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="RPImage"
                  variant="top"
                  src={circularBuissness}
                />
                <Card.Body>
                  <Card.Title>
                    Circular buissness models in the fashion industry
                  </Card.Title>
                  <Card.Text className="small-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href={pdf} variant="outline-danger" size="sm">
                    Read paper
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export { Mainpage };
