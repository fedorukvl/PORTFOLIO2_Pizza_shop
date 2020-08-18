import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./App";
import { Provider } from "react-redux"; //Для прокидывания данных из хранилища в компоненты
import store from "./Redux/store.js";

ReactDOM.render(
	<BrowserRouter>
		{/*Даем понять приложению, что мы используем redux*/}
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
