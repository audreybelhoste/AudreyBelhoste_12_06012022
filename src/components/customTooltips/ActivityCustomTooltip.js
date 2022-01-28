import propTypes from "prop-types";

const ActivityCustomTooltip = ({ active, payload, label }) => {
	if(active && payload && label){
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}`}kg</p>
				<p className="label">{`${payload[1].value}`}Kcal</p>
			</div>
		);
	}

	return null;
};

ActivityCustomTooltip.propTypes = {
	action: propTypes.bool,
	payload: propTypes.array,
	label: propTypes.number
}

export default ActivityCustomTooltip