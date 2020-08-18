import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./index.js";
import classNames from "classnames";

export default function PizzaBlock({
	id,
	imageUrl,
	name,
	price,
	sizes,
	types,
	onClickAddPizza,
	addedCount,
}) {
	let onAddPizza = () => {
		let obj = {
			id,
			imageUrl,
			name,
			price,
			size: pizzaSizeTypes[activePizzaSize],
			type: pizzaTypes[activePizzaType],
		};
		onClickAddPizza(obj);
	};

	//Мы деструктурировали пропс obj на конкретные свойства объекта
	let pizzaTypes = ["тонкое", "традиционное"];
	let pizzaSizeTypes = [26, 30, 40];
	let [activePizzaType, setActiveType] = useState(types[0]);
	let [activePizzaSize, setActiveSize] = useState(sizes[0]);

	let activeTypeClick = (index) => {
		setActiveType(index);
	};
	let activeSizeClick = (index) => {
		setActiveSize(index);
	};

	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			<h4 className="pizza-block__title">{name}</h4>
			<div className="pizza-block__selector">
				<ul>
					{pizzaTypes.map((type, index) => {
						return (
							<li
								className={classNames({
									active: activePizzaType === index,
									disabled: !types.includes(index),
								})}
								onClick={() => activeTypeClick(index)}
								key={`${type}_${index}`}
							>
								{type}
							</li>
						);
					})}
				</ul>
				<ul>
					{pizzaSizeTypes.map((size, index) => {
						return (
							<li
								className={classNames({
									active: activePizzaSize === index,
									disabled: !sizes.includes(size),
								})}
								onClick={() => activeSizeClick(index)}
								key={`${size}_${index}`}
							>
								{size} cм.
							</li>
						);
					})}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<Button onClick={onAddPizza} className="button--add" outline>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{addedCount && <i>{addedCount}</i>}
				</Button>
			</div>
		</div>
	);
}
PizzaBlock.propTypes = {
	imageUrl: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	types: PropTypes.arrayOf(PropTypes.number),
	sizes: PropTypes.arrayOf(PropTypes.number),
	onAddPizza: PropTypes.func,
	addedCount: PropTypes.number,
};
