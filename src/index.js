import React, {createContext}from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CommentsStore from './store/CommentsStore';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';
 

export const Context = createContext(null)

ReactDOM.render(
  <>
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
    comments: new CommentsStore()
  }}>
    <App />
  </Context.Provider>
  </>,
  document.getElementById('root')
);

