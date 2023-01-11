import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { message } from "./ErrorMessage";
import NavBar from "./NavBar";

const component2 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(15, "Must be 15 characters or less")
        .required(message.required),
      email: Yup.string().email(message.email).required("Required"),
      phoneNo: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Not a valid phone number"
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <>
      <NavBar />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">First Name</label>
          <input id="name" type="text" {...formik.getFieldProps("name")} />
          {formik.touched.name && !formik.errors.name ? <>✅</> : <>❎</>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? <>✅</> : <>❎</>}
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            id="phoneNo"
            type="text"
            {...formik.getFieldProps("phoneNo")}
          />
          {formik.touched.phoneNo && formik.errors.phoneNo ? <>✅</> : <>❎</>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default component2;
