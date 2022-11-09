import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../redux/shopping-list/actions";

const InputBox = () => {
	const [item, setItem] = useState("");
	const dispatch = useDispatch();

	const handleAddItem = e => setItem(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(addToList(item));

		setItem("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='type here..'
				value={item}
				onChange={handleAddItem}
			/>
			<button type='submit'>Add</button>
		</form>
	);
};

export default InputBox;
