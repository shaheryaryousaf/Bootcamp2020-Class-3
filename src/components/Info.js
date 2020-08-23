import React from "react";

const Info = ({ city, profession }) => {
	return (
		<div>
			<h4>I lives in {city}</h4>
			<h4>I am a {profession}</h4>
		</div>
	);
}

export default Info;