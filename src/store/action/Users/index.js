import { GET_USER_FAIL,GET_USER_REQUEST,GET_USER_SUCCESS } from "./user.action";

const getUsers = () => async dispatch => {
    try {
      dispatch({type:GET_USER_REQUEST});
      
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
      
      dispatch({type:GET_USER_SUCCESS,payload:json});
    }
      
      )
    } catch (error) {
      console.log(error)
      dispatch({type:GET_USER_FAIL});
    }
}

export default getUsers;