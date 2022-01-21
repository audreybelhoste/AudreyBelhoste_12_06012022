import { useEffect, useState } from "react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts"
import { getPerformanceByUserId } from "../services/performanceService"

function Performance() {
	const [performance, setPerformance] = useState([])

	useEffect(() => {
		getPerformanceByUserId(process.env.REACT_APP_USER_ID).then(function(response){
			setPerformance(response.data.data)
		})
		
	}, [])

	const data = performance.map(data => {
		let kind = ''
		switch (data.kind) {
			case 1:
				kind = 'Cardio'
				break
			case 2:
				kind = 'Energie'
				break
			case 3:
				kind = 'Endurance'
				break
			case 4:
				kind = 'Force'
				break
			case 5:
				kind = 'Vitesse'
				break
			case 6:
				kind = 'Intensité'
				break
			default:
				kind = ''
		}
		data = {
			"kind": kind,
			"value": data.value,
			"fullMark": 200
		}
		return data
	});

	return (
		<div className="performance">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart data={data} margin={{ top: 40, right: 40, bottom: 40, left: 40 }} startAngle={30} endAngle={-330}>
					<PolarGrid />
					<PolarAngleAxis dataKey="kind" />
					<Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Performance