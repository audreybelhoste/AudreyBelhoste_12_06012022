import { getUserById } from "../services/userService"
import Clap from "../assets/img/clap.png"
import KeyData from "../components/KeyData"
import Calorie from '../assets/icons/calorie.svg'
import Protein from '../assets/icons/protein.svg'
import Carbohydrate from '../assets/icons/carbohydrate.svg'
import Lipid from '../assets/icons/lipid.svg'
import { Cell, Legend, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"

function Profile() {
	let user = getUserById(12)
	const data = [
		{
			name: 'todayScore',
			todayScore: user.todayScore,
			fill: '#E60000',
		},
		{
			name: 'todayScore',
			todayScore: 1 - user.todayScore,
			fill: '#FBFBFB',
		},
	];
	
	const style = {
		top: '50%',
		right: 0,
		transform: 'translate(0, -50%)',
		lineHeight: '24px',
	};

	return (
		<div className="profile">
			<div className="userInfos">
				<h1 className="userInfos__title">Bonjour <span className="userInfos__title__color">{user.userInfos.firstName}</span></h1>
				<p className="userInfos__text">Félicitation ! Vous avez explosé vos objectifs hier !<img src={Clap} alt="applaudissements" className="userInfos__text__clap"></img></p>
			</div>
			<div className="statContainer">
				<div className="charts">
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
						<p className="score__content"><span class="strong">{user.todayScore*100}%</span> de votre objectif</p>
					</div>
				</div>
				<div className="keyDataContainer">
					<KeyData 
						element='Calories'
						count={user.keyData.calorieCount + 'kCal'} 
						img={Calorie}
						backgroundColor='bg-red'
						alt='Calorie'
					/>
					<KeyData 
						element='Protéines'
						count={user.keyData.proteinCount + 'g'}
						img={Protein}
						backgroundColor='bg-blue'
						alt='Protéines'
					/>
					<KeyData 
						element='Glucides'
						count={user.keyData.carbohydrateCount + 'g'}
						img={Carbohydrate}
						backgroundColor='bg-yellow'
						alt='Glucides'
					/>
					<KeyData 
						element='Lipides'
						count={user.keyData.lipidCount + 'g'}
						img={Lipid}
						backgroundColor='bg-pink'
						alt='Lipides'
					/>
				</div>
			</div>
		</div>
	)
}

export default Profile