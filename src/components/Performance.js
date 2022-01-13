import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

function Performance() {
	const data = [
		{
			"kind": "cardio",
			"value": 120,
			"fullMark": 200
		},
		{
			"kind": "energy",
			"value": 120,
			"fullMark": 200
		},
		{
			"kind": "endurance",
			"value": 140,
			"fullMark": 200
		},
		{
			"kind": "strength",
			"value": 50,
			"fullMark": 200
		},
		{
			"kind": "speed",
			"value": 200,
			"fullMark": 200
		},
		{
			"kind": "intensity",
			"value": 90,
			"fullMark": 200
		}
	]

	return (
		<div className="performance">
			<RadarChart outerRadius={90} width={250} height={250} data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="kind" />
				<Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
			</RadarChart>
		</div>
	)
}

export default Performance