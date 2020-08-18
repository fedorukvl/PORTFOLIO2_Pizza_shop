import React, { useCallback, useEffect } from "react";
import { Categories, PopUp, PizzaBlock } from "../Components/index.js";
import { useSelector, useDispatch } from "react-redux"; //хуки для реакт-редакс
import { setCategory, setSortBy } from "../Redux/actions/filters.js";
import { fetchPizzas } from "../Redux/actions/pizzas.js";
import { addPizzaToCart } from "../Redux/actions/cart.js";
let categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
let sortItems = [
	{ name: "популярности", type: "popular", order: "desc" },
	{ name: "цене", type: "price", order: "desc" },
	{ name: "алфавиту", type: "name", order: "asc" },
];

export default function Home() {
	let dispatch = useDispatch();

	let { category, sortBy } = useSelector(({ filters }) => filters);

	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [category, sortBy]);

	let items = useSelector(({ pizzas }) => pizzas.items); //зашли в хранилище и получили нужные нам данные.Деструктурировали храниище по конкретным редьюсерам (Могли написать state.filters.sortBy и т.д.) useState для redux

	let cartItems = useSelector(({ cart }) => cart.items);

	let onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, []); //Данная функция рендерится ОДИН ЕДИНСТВЕННЫЙ РАЗ при первом рендере
	let onSelectSortType = useCallback((type) => {
		dispatch(setSortBy(type));
	}, []);

	let handleAddPizzaToCart = (obj) => {
		dispatch({
			type: "ADD_PIZZA_CART",
			payload: obj,
		});
	};
	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={category}
					items={categoryName}
					onClickedItem={onSelectCategory} //здесь нет события, поэтому вызываем без анонимной функции
				/>
				<PopUp
					items={sortItems}
					activeSortType={sortBy.type}
					onClickSortType={onSelectSortType}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items.map((obj) => {
					return (
						<PizzaBlock
							onClickAddPizza={handleAddPizzaToCart}
							addedCount={
								cartItems[obj.id] &&
								cartItems[obj.id].items.length
							}
							key={obj.id}
							{...obj}
						/>
					);
				})}
			</div>
		</div>
	);
}
