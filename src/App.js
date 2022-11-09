import React from "react";
import "./app.css";
import InputBox from "./components/InputBox";
import ListItem from "./components/ListItem";
import Container from "./components/Container";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<h2>My Shopping List</h2>

				<InputBox />
				<ListItem />
			</Container>
		</Provider>
	);
};

export default App;
