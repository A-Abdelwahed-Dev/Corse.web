import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CourseLesson from "../components/CourseLesson";

const Course = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <h1>HTML Course</h1>
      </div>

      <div className="d-flex justify-content-center my-4 mb-4">
        <Card style={{ width: "80%" }}>
          <Card.Header className="text-light bg-dark">Level 1</Card.Header>
          <ListGroup variant="flush">
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
          </ListGroup>
        </Card>
      </div>

      <div className="d-flex justify-content-center my-4 mb-4">
        <Card style={{ width: "80%" }}>
          <Card.Header className="text-light bg-dark">Level 2</Card.Header>
          <ListGroup variant="flush">
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
            <CourseLesson />
          </ListGroup>
        </Card>
      </div>


    </>
  );
};

export default Course;
