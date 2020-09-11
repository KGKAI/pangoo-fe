import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { appState } from "./store";
import Editor from "./pages/editor";
import "./index.scss";

const App = () => {
	return (
		<Provider rootStore={appState}>
			<Editor />
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
