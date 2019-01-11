import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todo from "./reducers";
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';

const store = createStore(todo);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp />
        </Provider>,
        document.getElementById("root")
    );
};

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
