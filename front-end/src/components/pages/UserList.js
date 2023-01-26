import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from "react-redux"
import { loadUsers, deleteUsers } from "../redux/action";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data)

  //get api data from action
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  //click button delete user details
  const handleUser = (id) => {
    try {
      dispatch(deleteUsers(id));
      toast.success("SuccessFully Remove Emplloyee !", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      toast.error("Error Emplloyee Deletion !", {
        position: toast.POSITION.TOP_CENTER
      });
      console.log(error);
    }
  }


  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row pb-5">
          <div className="col-sm-3 ">
            <button className="btn btn-info "><Link to={`add`} ><i className="fa fa-users"></i> Add New Employee Details</Link></button>
          </div>
        </div>
        <div className="row">

          {users && users.map((user) => (
            <div className="col-sm-3 pt-3 pb-2" key={user.id} >
              <div className="card border-primary card-style">
                <img className="card-img-top" src={user.picture} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Employee Details</h5>
                  <p className="card-text">Name: {user.fname} {user.lname}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Phone No : {user.phone}</p>
                  <p className="card-text">Gender : {user.gender === "M" ? "Male" : "Femail"}</p>
                  <button className="btn btn-danger w-25 mx-auto" onClick={() => handleUser(user.id)}><i className="fa fa-trash"></i> </button>
                  <button className="btn btn-info w-25 mx-auto"><Link to={`edit/${user.id}`}><i className="fa fa-pencil"></i> </Link></button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default UserList;
