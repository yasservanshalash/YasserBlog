import { Box, Typography } from "@mui/material";
import React from "react";
import Highlight from "react-highlight";
import formikImg from "../assets/formik.png";
const Formik = () => {
  return (
    <Box>
      <img src={formikImg} />
      <Typography>
        Formik is a small group of React components and hooks for building forms
        in React
      </Typography>
      <Typography>First add the formik and yup packages</Typography>
      <Highlight className="bash">{`yarn add formik yup`}</Highlight>
      <Typography>
        import Formik and Form from "formik" && import * as Yup from "yup"
      </Typography>
      <Highlight className="Javascript">
        {`// in login component
import { Formik, Form } from "formik";
import * as Yup from "yup";
  `}
      </Highlight>
      <Typography>
        To start with formik 3 things are needed. The initial value, the form
        schema, and the onSubmit function
      </Typography>
      <Typography>In this example theres going to be a sign in form</Typography>
      <Highlight className="Javascript">
        {`// initial values
type InitialValues = {
email: string;
password: string | RegExp;
};

const initialValues: InitialValues = {
    email: "",
    password: "",
};

// form schema
const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("email is required to login"),
    password: Yup.string()
      .min(6, "Password too short!")
      .max(20, "Password tooo Long!")
      .required("Password is required to login")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Password must have at least one letter one number and 6 characters at least in total."
      ),
});

                `}
      </Highlight>
      <Typography>
        now use the Formik component imported earlier with the initial values
        the schema and the onSumbit function.
      </Typography>
      <Highlight className="javascript">
        {`<Formik
    initialValues={initialValues}
    validationSchema={FormSchema}
    onSubmit={(values: InitialValues) => { 
        console.log(values);
    }>
</Formik>`}
      </Highlight>
      <Typography>Now inside Formik a function is needed that has "errors", "touched", and "handleChange" thats going to return Form that was imported from 'Formik' above</Typography>
      <Highlight className="javascript">
        {`{({errors, touched, handleChange}) => {
            return (
                <Form>
                     // insert inputs in here
                </Form>
            )
        }}`}
        </Highlight>
        <Typography>
            Inside Form add the inputs needed for the form and add HandleChange to let formik know about the changes in the inputs
        </Typography>
        <Highlight className="javascript">
            {`<input
  type="text"
  name="email"
  id="email"
  placeholder="email"
  onChange={handleChange}
/>

<input
  type="password"
  name="password"
  id="password"
  placeholder="password"
  onChange={handleChange}
/>

<button type="submit">
  Log In
</button>
// add messages here
`}

            </Highlight>
            <Typography>
                Now a message needs to be displayed to the screen if theres something invalid in the form
            </Typography>
            <Highlight>
                {`{errors.email && touched.email ? (
  <Typography variant="subtitle2" color="error">
    * {errors.email} *
  </Typography>
) : null}
{errors.password && touched.password ? (
  <Typography variant="subtitle2" color="error">
    * {errors.password} *
  </Typography>
) : null}`}
            </Highlight>
    </Box>
  );
};

export default Formik;
