import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./App.css";
import QuoteContainer from "./components/templates/QuoteContainer/QuoteContainer";
import { selectApp, getQuoteAsync } from './appSlice';

export default function App() {
  const app = useSelector(selectApp);
  const dispatch = useDispatch(selectApp);
  const getNewQuote = ()=> {
    dispatch(getQuoteAsync());
  }
  const onComponentDidMount = () => {
    getNewQuote();
  }
  useEffect(onComponentDidMount, []);
  return (
    <div className="App" style={{ backgroundColor: app.color }}>
      <QuoteContainer
        id="quote-box"
        text={app.text}
        author={app.author}
        color={app.color}
        onGetNewQuote={getNewQuote}
      />
    </div>
  );
}
