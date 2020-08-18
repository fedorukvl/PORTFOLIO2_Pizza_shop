let initialState = {
	items: [],
	isLoaded: false,
};
let pizzas = (state = initialState, action) => {
	if (action.type === "SET_PIZZAS") {
		return {
			...state, //старые данные из стейта
			items: action.payload,
			isLoaded: action.isLoaded,
		};
	}
	return state;
};

export default pizzas;
