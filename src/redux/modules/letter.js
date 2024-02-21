import fakeData from "../../shared/fakeData.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = fakeData;
const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    modifyLetter: (state, action) => {
      const { id, modifyText } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: modifyText };
        }
        return letter;
      });
    },
  },
});

export const { addLetter, deleteLetter, modifyLetter } = letterSlice.actions;
export default letterSlice.reducer;
