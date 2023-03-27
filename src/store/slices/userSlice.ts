import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/user';

const initialState: IUser | null = null;

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout() {
      return null;
    },
    login(state: IUser | null, action) {
      return action.payload;
    },
  },
});

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
