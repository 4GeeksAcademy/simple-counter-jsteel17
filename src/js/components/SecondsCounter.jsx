import React from "react";

const SecondsCounter = ({number}) => {
	return (
		<div className="digit_container">
			<div className="digit_box">
				<h1 className="digit">{number}</h1>
			</div>
		</div>
	);
};

export default SecondsCounter;