import { Formik, ErrorMessage, Form, Field } from "formik";
import validationSchema from "./register.validation";

const Register = () => {
  const handleSubmit = async (values, bag) => {
    await new Promise((r) => setTimeout(r, 1000));

    if (values.email === "test@test.com") {
      return bag.setFieldError("email", "This e-mail address already using.");
    }

    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        email: "test@test.com",
        password: "123456",
        confirmPassword: "123456",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="email" placeholder="e-mail" />
          <ErrorMessage name="email" />

          <Field name="password" placeholder="password" />
          <ErrorMessage name="password" />

          <Field name="confirmPassword" placeholder="confirm password" />
          <ErrorMessage name="confirmPassword" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
