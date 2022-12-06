import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slice/accountSlice";
import AuthReducer from "./slice/authSlice";
import drawerSlice from "./slice/drawerSlice";
import genreTabSlice from "./slice/genreTabSlice";
import inputSlice from "./slice/inputSlice";
import FetchMovies from "./slice/moviesSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    fetchMovies: FetchMovies,
    drawer: drawerSlice,
    account: accountSlice,
    genreTab: genreTabSlice,
    input: inputSlice,
  }
});
