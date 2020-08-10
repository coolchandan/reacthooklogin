import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './components/Ingredients/LoginForm';
import userList from './components/Ingredients/usersList';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './components/store/reducer';
const store = createStore(loginReducer,
  applyMiddleware(thunk)
);
const App = props => {
 return  <Provider store={store}>
        <BrowserRouter>
        <Route path="/" component={LoginForm}  exact/>
         <Route path="/users" component={userList} exact/>
         </BrowserRouter>
         </Provider>
};

export default App;



