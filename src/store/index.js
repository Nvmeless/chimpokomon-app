import { createSlice, configureStore } from "@reduxjs/toolkit";

const chimpoHistorySlice = createSlice({
  name: "chimpoHistory",
  initialState: [
    {
      id: 1,
      type: "feed",
      isDone: true,
    },
  ],
  reducers: {
    addLine: (state, action) => {
      const newLine = {
        id: Date.now(),
        type: action.payload,
        isDone: false,
      };
      state.push(newLine);
    },
    removeLine: (state, action) => {
      state = state.filter((line) => line.id !== action.payload);
      return state;
    },
    updateLine: (state, action) => {
      const line = state.find((line) => line.id === action.payload);
      if (line.isDone) {
        state = state.filter((line) => line.id !== action.payload);
        return state;
      }
      line.isDone = true;
    },
  },
});
export const store = configureStore({
  reducer: {
    chimpoHistory: chimpoHistorySlice.reducer,
  },
});

export const { addLine, removeLine, updateLine } = chimpoHistorySlice.actions;
