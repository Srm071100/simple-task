import { configureStore } from "@reduxjs/toolkit";
import user from "./reducer/user.reducer";

export default configureStore({
    reducer : {
        user,
    },
})