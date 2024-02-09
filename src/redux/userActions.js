// import axios from "axios"
// import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes"

// export const fetchUserRequest = () =>{
//     return {
//         type: FETCH_USER_REQUEST
//     }
// }

// export const fetchUserSuccess = (users) =>{
//     return {
//         type: FETCH_USER_SUCCESS,
//         payload: users
//     }
// }

// export const fetchUserFailure = (error) =>{
//     return {
//         type: FETCH_USER_FAILURE,
//         payload: error
//     }
// }

// export const fetchUsers = () =>{
//     return (dispatch) =>{
//         dispatch(fetchUserRequest())
//         axios({url:'http://10.0.0.128:9099/eidiko/internal/userdata/get-all-list-user', method:"get",
  
//         headers:{
//         'Content-Type':'application/json',
//         "Authorization":`Bearer  ${localStorage.getItem("token")}` 
//        }
//      }
//          )
//         .then(response =>{
//             const usersprofile = response?.data?.result
//             dispatch(fetchUserSuccess(usersprofile))
//         })
//         .catch(error =>{
//             const errorMessage = error.message
//             dispatch(fetchUserFailure(errorMessage))
//             console.log(error)
//         })
//     }
// }
