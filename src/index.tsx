import React from "react";
import ReactDOM from "react-dom";

import Editor from "./pages/editor";
import { StoreProvider } from "./store";
import "./index.scss";

const App = () => {
	return (
		<StoreProvider>
			<Editor />
		</StoreProvider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
