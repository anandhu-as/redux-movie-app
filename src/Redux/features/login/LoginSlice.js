import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", username: "", password: "" },
};
const LoginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default LoginSlice.reducer;
export const { login } = LoginSlice.actions;
