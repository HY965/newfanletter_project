import { createSlice } from "@reduxjs/toolkit";

const initialState = "권혁우 튜터님";

const activeItemSlice = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      const setActiveItem = action.payload;
      return setActiveItem;
    },
  },
});
export const { setActiveItem } = activeItemSlice.actions;
export default activeItemSlice.reducer;
