import { getActivityByUserId } from "../../services/activityService"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react";
import ActivityCustomTooltip from "../customTooltips/ActivityCustomTooltip";

const Activity = () => {
	const [activity, setActivity] = useState(null)

	/**
	 * Format activity changing date to day
	 * @param {Array} activity Activity with full date
	 * @returns {Array} Activity with day only
	 */
	const transformDateToDay = (activity) => {
		return activity.map(session => {
			const date = new Date(session.day)
			
			session = {
				...session,
				'day' : date.getDate(),
			}
			
			return session
		})
	}

	useEffect(() => {
		getActivityByUserId(process.env.REACT_APP_USER_ID).then(function(response){
			setActivity(transformDateToDay(response.data.sessions))
		})
		
	}, [])

	return (
		<div className="activity">
			<p className="activity__title">Activité quotidienne</p>
				{activity && (
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							width={500}
							height={300}
							data={activity}
							margin={{
								top: 40,
								right: 5,
								left: 30,
								bottom: 20,
							}}
							barSize={7}
						>
							<CartesianGrid strokeDasharray="3" vertical={false}/>
							<XAxis dataKey="day" tickLine={false} tickMargin={15} />
							<YAxis yAxisId="left" dataKey="kilogram" orientation="right" type="number" domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false}/>
							<YAxis yAxisId="right" dataKey="calories" hide={true}/>
							<Tooltip content={<ActivityCustomTooltip />}/>
							<Legend verticalAlign="top" height={36} align="right" iconType="circle" iconSize={10} wrapperStyle={{right: 30, top: 20}} />
							<Bar yAxisId="left" name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10,10,0,0]}/>
							<Bar yAxisId="right" name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10,10,0,0]}/>
						</BarChart>
					</ResponsiveContainer>
				)}
		</div>
	)
}

export default Activity