import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routers, store } from "../Config";
import "./App.css";

function App() {
  return (
    
      <div
        style={{
          maxWidth: "900px",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Provider store={store}>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </Provider>
      </div>
   
  );
}

export default App;
