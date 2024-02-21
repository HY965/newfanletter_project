import { createSlice } from "@reduxjs/toolkit";

const activeItemSlice = createSlice({
  name: "activeItem",
  initialState: "권혁우 튜터님",
  reducers: {
    setActiveItem: (state, action) => {
      const setActiveItem = action.payload;
      return setActiveItem;
    },
  },
});
export const { setActiveItem } = activeItemSlice.actions;
export default activeItemSlice.reducer;
