import React, { useState, memo } from "react";
import PropTypes from "prop-types";

let Categories = memo(function Categories({
	activeCategory,
	items,
	onClickedItem,
}) {
	//Поставили memo, чтобы компонент не рендерился лишний раз

	let activateItem = (index) => {
		onClickedItem(index);
	};
	return (
		<div className="categories">
			<ul>
				<li
					className={activeCategory === null ? "active" : ""}
					onClick={() => activateItem(null)}
				>
					Все
				</li>
				{items.map((obj, index) => {
					return (
						<li
							className={activeCategory === index ? "active" : ""}
							onClick={() => activateItem(index)}
							key={`${obj}_${index}`}
						>
							{obj}
						</li>
					);
				})}
			</ul>
		</div>
	);
});

export default Categories;

Categories.propTypes = {
	//activeCategory: PropTypes.oneOf([PropTypes.number(), null]),
	items: PropTypes.arrayOf(PropTypes.string),
	onClickedItem: PropTypes.func,
};
