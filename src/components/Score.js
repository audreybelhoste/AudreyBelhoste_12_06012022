import propTypes from "prop-types";
import { Pie, PieChart, ResponsiveContainer } from "recharts"

function Score({todayScore}) {

	const data = [
		{
			name: 'todayScore',
			todayScore: 1 - todayScore,
			fill: '#FBFBFB',
		},
		{
			name: 'todayScore',
			todayScore: todayScore,
			fill: '#E60000',
			stroke: '#E60000',
		},
	];

	return (
		<div className="score">
			<p className="score__title">Score</p>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie 
					data={data} 
					dataKey="todayScore" 
					nameKey="name" 
					startAngle={-180}
					endAngle={180}
					innerRadius={60}
					outerRadius={60} 
					/>
				</PieChart>
			</ResponsiveContainer>
			<p className="score__content"><span class="strong">{ todayScore*100 }%</span> de votre objectif</p>
		</div>
	)
}

Score.propTypes = {
  name: propTypes.number
}

export default Score