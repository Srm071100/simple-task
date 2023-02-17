import { GET_USER_FAIL,GET_USER_REQUEST,GET_USER_SUCCESS } from '../action/Users/user.action'

const initialState = {
  userListLoading: false,
  userListError: false,
  userListSuccess:false,
  userListData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        userListLoading: true,
        userListError: false,
        userListSuccess:false,
        userListData: [],
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userListLoading: false,
        userListError: false,
        userListSuccess:true,
        userListData: action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        userListLoading: false,
        userListError: true,
        userListSuccess:false,
        userListData: [],
      };
    default:
      return state;
  }
}