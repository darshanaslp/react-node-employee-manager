import * as types from './actionType';
const initialState = {
    users: [],
    user: {},
    loading: true,
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };

        case types.DELETE_USERS:
        case types.ADD_USERS:
        case types.EDIT_USERS:
            return{
                ...state,
                loading:false
            }

        case types.GET_SINGLE_USERS:
            return{
                ...state,
                user:action.payload,
                loading:false
            }    

        default:
            return state;
    }
};

export default usersReducers