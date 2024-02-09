import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: null,

};

export const getUserProfiles = createAsyncThunk(
  'profile/get',
  async () => {
    let response=null
    // return await axios({
     await axios({
      url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population', method: 'get'

      // url: 'http://10.0.0.128:9099/eidiko/internal/userdata/get-all-list-user', method: "get",
      // headers: {
      //   'Content-Type': 'application/json',
      //   "Authorization": `Bearer  ${localStorage.getItem("token")}`
      // }
    }
    )
    .then((res) => {
      response=res
      console.log('One', response)
    // response=res
    //   setUser(r?.data?.result)
    })
    // .catch((e) => {
    //   console.log(e)
    // });
    // console.log('Second', response)
    return response.data
  }

)

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  // reducers: {
  // },
  extraReducers: (builder) => {
    builder.addCase(getUserProfiles.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getUserProfiles.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      // state.data ="It is not working out Man!"
      console.log(action.payload)

    })
    builder.addCase(getUserProfiles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },

}
)

export const reducerlist = {
  "profile": profileSlice.reducer, 
};