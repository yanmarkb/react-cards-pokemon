import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

// useFlip hook
function useFlip() {
	const [isFlipped, setIsFlipped] = useState(true);
	const flip = () => {
		setIsFlipped((isFlipped) => !isFlipped);
	};
	return [isFlipped, flip];
}

// useAxios hook
function useAxios(baseUrl) {
	const [data, setData] = useState([]);

	const addData = async (urlSuffix = "") => {
		const response = await axios.get(`${baseUrl}${urlSuffix}`);
		setData((data) => [...data, { ...response.data, id: uuid() }]);
	};

	return [data, addData];
}

export { useFlip, useAxios };
