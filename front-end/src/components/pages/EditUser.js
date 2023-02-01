import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import { useFormik } from 'formik';
import { EmployeeSchema } from "../employeeSchema";

import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getSingleUsers, UpdateUsers } from "../redux/action";


const EditUser = () => {
  const errorlog = useSelector(state => state.data.error);
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    picture: ""
  })
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  //const { user } = useSelector((state)=> state.data)
  const { user } = useSelector(state => state.data, shallowEqual)

  //get single action
  useEffect(() => {
    dispatch(getSingleUsers(id))
  }, []);

  //update action
  useEffect(() => {
    if (user) {
      setState({ ...user })
    }
  }, [user]);

  //update details
  const onSubmit = async (values) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(UpdateUsers(values, id))
      toast.success("Successfully Update Emplloyee !", {
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


  const { values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      fname: user?.fname || "",
      lname: user?.lname || "",
      email: user?.email || "",
      phone: user?.phone || "",
      gender: user?.gender || "",
      picture: user?.picture || ""

    },
    validationSchema: EmployeeSchema,
    onSubmit
  })

  return (
    <div className="container-fluid pb-4">
      <div className="row pt-4">
        <div className="w-25 mx-auto">
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
              {/* <select
                value={values.gender === "M" ? "M" : "F"} id="gender" onChange={handleChange} onBlur={handleBlur}
                className={errors.gender && touched.gender ? "input-error form-control" : "form-control"}>
                <option >Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select> */}

              <select
                value={values.gender === "M" || values.gender === "F" ? values.gender : "Select Gender"}
                id="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.gender && touched.gender ? "input-error form-control" : "form-control"
                }
              >
                <option value="">Select Gender</option>
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
              <button disabled={isSubmitting} className="btn btn-primary" type="submit">Edit Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
