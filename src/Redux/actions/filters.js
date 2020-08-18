export let setSortBy = (name) => ({
	type: "SET_SORT_BY",
	payload: name,
});
export let setCategory = (catIndex) => ({
	type: "SET_CATEGORY",
	payload: catIndex,
});
