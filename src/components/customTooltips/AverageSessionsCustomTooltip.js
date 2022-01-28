import propTypes from "prop-types"

const AverageSessionsCustomTooltip = ({ active, payload, label }) => {
	if(active && payload && label){
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}`} min</p>
			</div>
		)
	}
	return null
}

AverageSessionsCustomTooltip.propTypes = {
	action: propTypes.bool,
	payload: propTypes.array,
	label: propTypes.number
}
 
export default AverageSessionsCustomTooltip