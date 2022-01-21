import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { getAverageSessionsByUserId } from "../services/averageSessionsService"

const CustomTooltip = ({ active, payload, label }) => {
	if(active && payload && label){
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}`} min</p>
			</div>
		);
	}

	return null;
};

function AverageSessions() {
	const [averageSessions, setAverageSessions] = useState([])

	useEffect(() => {
		getAverageSessionsByUserId(process.env.REACT_APP_USER_ID).then(function(response){
			setAverageSessions(response.data.sessions)
		})
	}, [])

	const data = averageSessions.map(session => {
		let day = ''
		switch (session.day) {
			case 1:
				day = 'L'
				break
			case 2:
				day = 'M'
				break
			case 3:
				day = 'M'
				break
			case 4:
				day = 'J'
				break
			case 5:
				day = 'V'
				break
			case 6:
				day = 'S'
				break
			case 7:
				day = 'D'
				break
			default:
				day = ''
		}
		session = {
			...session,
			'day' : day,
		}
		return session
	});

	return (
		<div className="averageSessions">
			<p className="averageSessions__title">Durée moyenne des sessions</p>
			<ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={250}
          height={250}
          data={data}
          margin={{
            top: 70,
            right: 0,
            left: 0,
            bottom: 15,
          }}
        >
					<defs>
						<linearGradient id="colorSessionLength" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.3}/>
							<stop offset="90%" stopColor="#FFFFFF" stopOpacity={0.0}/>
						</linearGradient>
					</defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} padding={{ left: 10, right: 10 }}/>
          <Tooltip content={<CustomTooltip />}/>
          <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="url(#colorSessionLength)" />
        </AreaChart>
      </ResponsiveContainer>
		</div>
	)
}

export default AverageSessions