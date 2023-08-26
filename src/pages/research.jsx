import React from "react";

const research = () => {
  return (
    <>
      <h1>My research paapers</h1>

      <div className="research-papers">
        <h3 className="mb-5">My research papers</h3>
        <Row xs={1} md={2} className="g-4 ">
          <Col className="technologicalForecasting">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={techno} />
              <Card.Body>
                <Card.Title>
                  Commercializing circular economy innovations
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button href={pdf} variant="primary" size="sm">
                  Read paper
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="technologicalForecasting2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={digitalInnovations} />
              <Card.Body>
                <Card.Title>
                  Digital innovations for the circular eceonomy
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" size="sm">
                  Read paper
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="technologicalForecasting4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={innovation} />
              <Card.Body>
                <Card.Title>Innovations for a circular economy</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button href={pdf} variant="primary" size="sm">
                  Read paper
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="technologicalForecasting3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={circularBuissness} />
              <Card.Body>
                <Card.Title>
                  Circular buissness models in the fashion industry
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button href={pdf} variant="primary" size="sm">
                  Read paper
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};


export default research;