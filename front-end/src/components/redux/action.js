import * as types from './actionType';
import axios from 'axios';


const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const userDelete = () => ({
    type: types.DELETE_USERS
})

const userAdd = () => ({
    type: types.ADD_USERS
})


const getUser = (user) => ({
    type: types.GET_SINGLE_USERS,
    payload:user
})


const userEdit = () => ({
    type: types.EDIT_USERS
})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get("http://localhost:5000/users")
            .then((res) => {
                dispatch(getUsers(res.data));
            })
            .catch(error => console.log(error));
    }
}


export const deleteUsers = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then((res) => {
                dispatch(userDelete());
                dispatch(loadUsers());
            })
            .catch(error => console.log(error));
    }
}


export const addUsers = (user) => {
    return function (dispatch) {
        axios.post("http://localhost:5000/users", user)
            .then((res) => {
                dispatch(userAdd());
                dispatch(loadUsers());
            })
            .catch(error => console.log(error));
    }
}


export const getSingleUsers = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users/${id}`)
            .then((res) => {
                dispatch(getUser(res.data));
            })
            .catch(error => console.log(error));
    }
}


export const UpdateUsers = (user, id) => {
    return function (dispatch) {
        axios.patch(`http://localhost:5000/users/${id}`, user)
            .then((res) => {
                dispatch(userEdit());
                dispatch(loadUsers());
            })
            .catch(error => console.log(error));
    }
}
