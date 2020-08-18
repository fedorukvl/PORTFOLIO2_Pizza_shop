import React from "react";
import classNames from "classnames";

let Button = ({ onClick, className, children, outline }) => {
	return (
		<button
			onClick={onClick}
			className={classNames("button", className, {
				"button--outline": outline,
			})}
		>
			{children}
		</button>
	);
};

export default Button;
