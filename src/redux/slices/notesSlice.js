import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "noteSlice",
  initialState: {
    notes: [],
  },
  reducers: {
    createNote: (state, action) => {
      // state.notes = [...state.notes, action.payload];
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {},
  },
});

export default notesSlice.reducer;
export const {createNote, deleteNote} = notesSlice.actions;