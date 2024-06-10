import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./reducer/auth";
import api from "./api/api";
import { miscReducer } from "./reducer/misc";
import { chatReducer } from "./reducer/chat";

const store = configureStore({
    reducer: {
        authReducer,
        miscReducer,
        chatReducer,
        [api.reducerPath]:api.reducer,
      
    },
    middleware: (defaultMiddleware) => [...defaultMiddleware(), api.middleware]
});

export default store;