import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [{ id: nanoid(), username: "Erkan" }],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push({ id: nanoid(), ...action.payload });
    },
  },
});

export const { addUser } = usersSlice.actions;
export const selectList = (state) => state.users.list;

export default usersSlice.reducer;
