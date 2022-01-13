import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts"

function Score(props) {
	const [todayScore] = useState(props);

	const data = [
		{
			name: 'todayScore',
			todayScore: todayScore.todayScore,
			fill: '#E60000',
		},
		{
			name: 'todayScore',
			todayScore: 1 - todayScore.todayScore,
			fill: '#FBFBFB',
		},
	];

	return (
		<div className="score">
			<p className="score__title">Score</p>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart width={100} height={100}>
					<Pie 
					data={data} 
					dataKey="todayScore" 
					nameKey="name" 
					cx="50%"
					cy="50%"
					startAngle={180}
					endAngle={-180}
					innerRadius={60}
					outerRadius={80} />
				</PieChart>
			</ResponsiveContainer>
			<p className="score__content"><span class="strong">{ todayScore.todayScore*100 }%</span> de votre objectif</p>
		</div>
	)
}

export default Score