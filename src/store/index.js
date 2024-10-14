import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
// const chimpoHistorySlice = createSlice({
//   name: "chimpoHistory",
//   initialState: [
//     {
//       id: 1,
//       type: "feed",
//       isDone: true,
//     },
//   ],
//   reducers: {
//     addLine: (state, action) => {
//       console.log(action);
//       const newLine = {
//         id: Date.now(),
//         type: action.payload ?? "feed",
//         isDone: false,
//       };
//       state.push(newLine);
//     },
//     removeLine: (state, action) => {
//       state = state.filter((line) => line.id !== action.payload);
//       return state;
//     },
//     updateLine: (state, action) => {
//       const line = state.find((line) => line.id === action.payload);
//       if (line.isDone) {
//         state = state.filter((line) => line.id !== action.payload);
//         return state;
//       }
//       line.isDone = true;
//     },
//   },
// });

const pokeApiSlice = createSlice({
  name: "pokeapi",
  initialState: {
    pokefiche: null,
    status: "idle",
    errors: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemon.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.pokefiche = action.payload;
        state.status = "success";
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload;
      });
  },
});

export const fetchPokemon = createAsyncThunk(
  "pokeapi/fetchPokemon",
  async (payload = 132) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://pokeapi.co/api/v2/pokemon/${payload}`,
    };

    const result = await axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });

    return result;
  }
);

export const store = configureStore({
  reducer: {
    // chimpoHistory: chimpoHistorySlice.reducer,
    pokeApiSlice: pokeApiSlice.reducer,
  },
});

// export const { addLine, removeLine, updateLine } = chimpoHistorySlice.actions;
