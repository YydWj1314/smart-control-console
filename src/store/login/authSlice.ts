import { createSlice } from "@reduxjs/toolkit";

/**
 * Store token to Redux and browser session
 */
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || null,
  },
  reducers: {
    // Add token
    setToken: (state, action) => {
      state.token = action.payload; // save token to Redux
      sessionStorage.setItem("token", action.payload); // save token to browser session
    },
    // Remove token
    clearToken: (state) => {
      state.token = null;
      sessionStorage.removeItem("token");
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
