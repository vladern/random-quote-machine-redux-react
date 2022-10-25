import { createSlice } from "@reduxjs/toolkit";
const QUOTES = [
  {
    text: "Certain things catch your eye, but pursue only those that capture the heart.",
    author: " Ancient Indian Proverb",
    color: "rgb(22, 160, 133)",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    color: "rgb(155, 89, 182)",
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain",
    color: "rgb(39, 174, 96)",
  },
  {
    text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
    color: "rgb(251, 105, 100)",
  },
  {
    text: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
    color: "rgb(119, 177, 169)",
  },
  {
    text: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
    author: "Unknown",
    color: "rgb(52, 34, 36)",
  },
];

export const appSlice = createSlice({
  name: "app",
  initialState: {
    value: {
      text: "",
      author: "",
      color: "#FFFFF",
    },
  },
  reducers: {
    getQuote: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getQuote } = appSlice.actions;

export const getQuoteAsync = () => (dispatch) => {
  setTimeout(() => {
    const randomQuoteIndex = Math.floor(Math.random() * 6);
    const randomQuote = QUOTES[randomQuoteIndex];
    dispatch(getQuote(randomQuote));
  }, 100);
};

export const selectApp = (state) => state.app.value;

export default appSlice.reducer;
