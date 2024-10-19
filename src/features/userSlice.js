import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {
      id: uuid(),
      name: "Martin",
      email: "martin@email.com",
    },
  ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
      // state.users = [...state.users, payload]
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
