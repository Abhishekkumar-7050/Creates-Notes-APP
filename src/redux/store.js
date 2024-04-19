import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./slices/messageSlice";
import notesReducr from './slices/NotesSlice'

export default configureStore({
    reducer:{
        messageReducer ,
        notesReducr
        // if key and value is same then we can send only value
    }
})