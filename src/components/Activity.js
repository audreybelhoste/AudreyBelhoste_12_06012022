import { getActivityByUserId } from "../services/activityService"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, ZAxis } from "recharts"

const CustomTooltip = ({ active, payload, label }) => {
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

function Activity() {
	let activity = getActivityByUserId(12)

	const data = activity.sessions;

	return (
		<div className="activity">
			<p className="activity__title">Activité quotidienne</p>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 40,
						right: 5,
						left: 5,
						bottom: 5,
					}}
					barSize={7}
				>
					<CartesianGrid strokeDasharray="3" vertical={false}/>
					<XAxis dataKey="day" />
					<YAxis yAxisId="left" dataKey="kilogram" orientation="right" type="number" domain={['dataMin - 1', 'dataMax + 1']} axisLine={false}/>
					<YAxis yAxisId="right" dataKey="calories" hide="true"/>
					<Tooltip content={<CustomTooltip />}/>
					<Legend verticalAlign="top" height={36} align="right" iconType={'circle'} iconSize={10} wrapperStyle={{right: 80, top: 0}} />
					<Bar yAxisId="left" dataKey="kilogram" fill="#282D30"/>
					<Bar yAxisId="right" dataKey="calories" fill="#E60000" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Activity