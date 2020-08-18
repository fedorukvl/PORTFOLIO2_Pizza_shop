export let addPizzaToCart = (pizzaObj) => ({
	type: "ADD_PIZZA_CART",
	payload: pizzaObj,
});

export let clearCart = (pizzaObj) => ({
	type: "CLEAR_CART",
});

export let removeCartItem = (id) => ({
	type: "REMOVE_CART_ITEM",
	payload: id,
});

export let plusCartItem = (id) => ({
	type: "PLUS_CART_ITEM",
	payload: id,
});

export let minusCartItem = (id) => ({
	type: "MINUS_CART_ITEM",
	payload: id,
});
