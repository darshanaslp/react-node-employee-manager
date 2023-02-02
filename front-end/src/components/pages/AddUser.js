import React from "react";
import { useNavigate } from "react-router-dom";

import { useFormik } from 'formik';
import { EmployeeSchema } from "../employeeSchema";

import { useDispatch, useSelector } from "react-redux"
import { addUsers } from "../redux/action";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const errorlog = useSelector(state => state.data.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //submit button clicked save details
  const onSubmit = async (values) => {
    try {
      await dispatch(addUsers(values))
      toast.success("Successfully Add Employee!", {
        position: toast.POSITION.TOP_CENTER
      });
	   navigate("/");
    } catch (error) {
      if (error.response.data && error.response.data.error) {
        toast.error(`${error.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error("An error occurred", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      console.error(error);
    }
  };

  //formik form details
  const { values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      gender: "",
      picture: ""

    },
    validationSchema: EmployeeSchema,
    onSubmit
  })

  return (
    <div className="container-fluid pb-4">
      <div className="row pt-4">
        <div class="w-25 mx-auto">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">First Name</label>
              <input
                type="text"
                id="fname"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.fname && touched.fname ? "input-error form-control" : "form-control"}
              />
              {errors.fname && touched.email && <p className="error">{errors.fname}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Last Name</label>
              <input
                type="text"
                id="lname"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.lname && touched.lname ? "input-error form-control" : "form-control"}
              />
              {errors.lname && touched.lname && <p className="error">{errors.lname}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email</label>
              <input
                type="text"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error form-control" : "form-control"}
              />
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Phone No</label>
              <input
                type="text"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? "input-error form-control" : "form-control"}
              />
              {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Gender</label>
              <select
                value={values.gender} id="gender" onChange={handleChange} onBlur={handleBlur}
                className={errors.gender && touched.gender ? "input-error form-control" : "form-control"}>
                <option >Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Picture Url</label>
              <input
                type="text"
                id="picture"
                value={values.picture}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.picture && touched.picture ? "input-error form-control" : "form-control"}
              />
              {errors.picture && touched.picture && <p className="error">{errors.picture}</p>}
            </div>

            <div className="form-group pt-2">
              <button disabled={isSubmitting} className="btn btn-primary" type="submit">Save Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
