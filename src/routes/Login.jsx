import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik"
import * as Yup from 'yup';
const Login = () => {
  const users = {
    "admins": [
      {
        "id": 1000000,
        "name": "Super Admin",
        "email": "admin@gmail.com",
        "password": "admin"
      }
    ],
    "students": [
      {
        "id": 1000,
        "name": "Ahmad Alaa",
        "age": 20,
        "email": "ahmad.alaa@gmail.com",
        "password": "admin",
        "courses": [1, 2]
      },
      {
        "id": 1001,
        "name": "Mahmoud Ali",
        "age": 21,
        "email": "mahmoud.ali@gmail.com",
        "password": "admin",
        "courses": [4]
      }
    ]
  }
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, "Password must be at least 8 characters long").required("Please enter your password")
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },

  })
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <h1>Log In</h1>
      </div>

      <div className="m-5">
        <Form
          onSubmit={formik.handleSubmit}
        >
          <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
            <Form.Control type="email" placeholder="Enter email"
              onChange={formik.handleChange} name="email"
              value={formik.values.email}
              onError={formik.errors.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
            <Form.Control type="password" placeholder="Password"
              onChange={formik.handleChange} name="password"
              value={formik.values.password}
              onError={formik.errors.password}
            />
          </Form.Group>
          <div className="d-flex justify-content-center my-4">
            <Button type="submit" >Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
