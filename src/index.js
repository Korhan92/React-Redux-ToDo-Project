import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore} from "redux"
import TodoListReducer from "./reducers/TodoListReducer"
import { Provider } from "react-redux";


const myStore = createStore(TodoListReducer)
ReactDOM.render(<Provider store={myStore}> <App /></Provider>, document.getElementById("root"));
