import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
const Signup = () => {
  return (
    <>
      <div class="d-flex justify-content-center my-4">
        <h1>Sign Up</h1>
      </div>

      <div className="m-5">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Age" />
            </Col>
          </Row>

          <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div class="d-flex justify-content-center my-4">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
