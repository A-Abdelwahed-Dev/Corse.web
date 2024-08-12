import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Login = () => {
  // const data = {
  //   admins: [
  //     {
  //       id: 1000000,
  //       name: "Super Admin",
  //       email: "admin@gmail.com",
  //       password: "admin",
  //     },
  //   ],

  //   students: [
  //     {
  //       id: 1000,
  //       name: "Ahmad Alaa",
  //       age: 20,
  //       email: "ahmad.alaa@gmail.com",
  //       password: "admin",
  //       courses: [1, 2],
  //     },
  //     {
  //       id: 1001,
  //       name: "Mahmoud Ali",
  //       age: 21,
  //       email: "mahmoud.ali@gmail.com",
  //       password: "admin",
  //       courses: [4],
  //     },
  //   ],
  // };

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
