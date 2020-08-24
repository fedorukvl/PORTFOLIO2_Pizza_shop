export let fetchPizzas = (sortBy, category) => (dispatch) => {
	fetch(
		`https://pizza-dbb.herokuapp.com/pizzas?${
			//убрали хост, т.к. прописали proxy в package.json
			category !== null ? `category=${category}` : ""
		}&_sort=${sortBy.type}&_order=${sortBy.order}`
	)
		.then((resp) => {
			let json = resp.json();
			return json;
		})
		.then((json) => {
			dispatch(setPizzas(json));
		});
}; // асинхронный action, который возращает функцию
export let setPizzas = (items) => ({
	type: "SET_PIZZAS",
	payload: items,
	isLoaded: true,
});
