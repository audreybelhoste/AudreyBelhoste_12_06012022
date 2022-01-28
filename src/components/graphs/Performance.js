import { useEffect, useState } from "react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts"
import { getPerformanceByUserId } from "../../services/performanceService"

const Performance = () => {
	const [performance, setPerformance] = useState(null)

	/**
	 * Format performance changing kind from number to word
	 * @param {Array} performance Performance with kind identity by number
	 * @returns {Array} Performance with kind identity by word
	 */
	const transformKindNumberToWord = (performance) => {
		return performance.map(data => {
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
				...data,
				"kind": kind,
				"fullMark": 200
			}
			return data
		})
	}

	useEffect(() => {
		getPerformanceByUserId(process.env.REACT_APP_USER_ID).then(function(response){
			setPerformance(transformKindNumberToWord(response.data.data))
		})
		
	}, [])

	return (
		<div className="performance">
			{performance && (
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart data={performance} margin={{ top: 40, right: 40, bottom: 40, left: 40 }} startAngle={30} endAngle={-330}>
						<PolarGrid />
						<PolarAngleAxis dataKey="kind" />
						<Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
					</RadarChart>
				</ResponsiveContainer>
			)}
		</div>
	)
}

export default Performance