import React from "react";
import { useSelector } from "react-redux";

const ListItem = () => {
	const items = useSelector(state => state.items);

	return (
		<ol>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ol>
	);
};

export default ListItem;
