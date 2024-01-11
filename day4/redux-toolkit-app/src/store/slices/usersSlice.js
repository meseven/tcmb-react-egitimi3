import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    loading: false,
    error: null,
  }),
  reducers: {
    addUser: usersAdapter.addOne,
    removeUser: usersAdapter.removeOne,
    removeAll: usersAdapter.removeAll,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      usersAdapter.addMany(state, action.payload);
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = "Bir sorun oluştu!";
    });
  },
});

export const { addUser, removeUser, removeAll } = usersSlice.actions;
export const { selectAll, selectTotal } = usersAdapter.getSelectors(
  (state) => state.users
);

export const selectLoading = (state) => state.users.loading;
export const selectError = (state) => state.users.error;

export default usersSlice.reducer;
