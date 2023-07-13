import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", username: "" },
};
const LoginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user += initialState;
    },
  },
});
export default LoginSlice.reducer;
export const { login, logout } = LoginSlice.actions;
