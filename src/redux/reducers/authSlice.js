import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  isLogin: false,
};
const authSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      (state.userData = action.payload.userData),
        (state.isLogin = action.payload.isLogin);
    },
    logoutUser: (state, action) => {
      (state.userData = null), (state.isLogin = null);
    },
  },
});
export const { saveUserData, logoutUser } = authSlice.actions;
export default authSlice.reducer;
