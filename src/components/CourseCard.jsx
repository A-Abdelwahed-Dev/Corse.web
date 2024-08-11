import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../asests/imgs/html.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default class CourseCard extends Component {
  render() {
    return (
      <div className="mx-md-0 d-flex justify-content-center">
        <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>HTML Course</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </Card.Text>
          <Row>
            <Col>
              <Button variant="text-light bg-dark">
                <Link to="Course" className=" text-white text-decoration-none">
                  View Course
                </Link>
              </Button>
            </Col>
            <Col>
              <legend>100$</legend>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </div>
    );
  }
}
