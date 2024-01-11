import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addUser: usersAdapter.addOne,
  },
});

export const { addUser } = usersSlice.actions;
export const { selectAll } = usersAdapter.getSelectors((state) => state.users);

export default usersSlice.reducer;
