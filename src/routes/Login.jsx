import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <h1>Log In</h1>
      </div>

      <div className="m-5">
        <Form>
          <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-flex justify-content-center my-4">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
