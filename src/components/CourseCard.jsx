import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default class CourseCard extends Component {
  render() {
    return (
      <div className="mx-md-0 d-flex justify-content-center">
        <Card className="mb-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            style={{ height: "10rem" }}
            src={this.props.img}
          />
          <Card.Body>
            <Card.Title> {this.props.name}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </Card.Text>
            <Row>
              <Col>
                <Button variant="text-light bg-dark">
                  <Link
                    to="Course"
                    className=" text-white text-decoration-none"
                  >
                    View Course
                  </Link>
                </Button>
              </Col>
              <Col>
                <legend>{this.props.fees} $</legend>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
