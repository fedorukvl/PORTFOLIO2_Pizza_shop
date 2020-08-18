import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //хуки для реакт-редакс
import { Route } from "react-router-dom";
import { Header } from "./Components/index.js";
import { Home, Cart } from "./Pages/index.js";
import store from "./Redux/store.js";

let App = () => {
  let dispatch = useDispatch(); //меняем стейт в хранилище через dispatch(setPizzas())
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;
