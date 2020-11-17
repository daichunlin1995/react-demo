import React from 'react';
import ReactDOM from 'react-dom';
import './TodoList.css'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'
import reportWebVitals from './reportWebVitals';

const App = (
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>
)
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
