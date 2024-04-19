import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice ({
  name: "NotesSlice",
  initialState: {
    notes: []
  },
  reducers: {
    createNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNotes: (state, action) => {
        state.notes = state.notes.filter(note => note.id !== action.payload)
    }
  }
});

export default NotesSlice.reducer;

export const { createNotes, deleteNotes } = NotesSlice.actions
