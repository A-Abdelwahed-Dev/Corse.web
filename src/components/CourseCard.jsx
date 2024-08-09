import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../asests/imgs/html.png"
import React, { Component } from 'react'

export default class CourseCard extends Component {
  render() {
    return (
        <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}
