import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
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
	let averageSessions = getAverageSessionsByUserId(12)

	const data = averageSessions.sessions;

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
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
					<defs>
						<linearGradient id="colorSessionLength" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8}/>
							<stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
						</linearGradient>
					</defs>
          <XAxis dataKey="day" />
          <Tooltip content={<CustomTooltip />}/>
          <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="url(#colorSessionLength)" />
        </AreaChart>
      </ResponsiveContainer>
		</div>
	)
}

export default AverageSessions