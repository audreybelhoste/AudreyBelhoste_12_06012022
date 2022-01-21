import { getUserById } from "../services/userService"
import Clap from "../assets/img/clap.png"
import KeyData from "../components/KeyData"
import Calorie from '../assets/icons/calorie.svg'
import Protein from '../assets/icons/protein.svg'
import Carbohydrate from '../assets/icons/carbohydrate.svg'
import Lipid from '../assets/icons/lipid.svg'
import Activity from "../components/Activity"
import Score from "../components/Score"
import Performance from "../components/Performance"
import AverageSessions from "../components/AverageSessions"
import React, { useEffect, useState } from "react"

function Profile() {
	const [user, setUser] = useState({})

	useEffect(() => {
		getUserById(process.env.REACT_APP_USER_ID).then(function(response){
			setUser(response.data)
		})	
	}, [])

	return (
		<div className="profile">
			<div className="userInfos">
				<h1 className="userInfos__title">Bonjour {user.userInfos && <span className="userInfos__title__color">{user.userInfos.firstName}</span>}</h1>
				<p className="userInfos__text">Félicitation ! Vous avez explosé vos objectifs hier !<img src={Clap} alt="applaudissements" className="userInfos__text__clap"></img></p>
			</div>
			<div className="statContainer">
				<div>
					<Activity />
					<div className="charts">
						<AverageSessions />
						<Performance />
						<Score
							todayScore={user.todayScore}
						/>
					</div>
				</div>
				{user.keyData &&
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
				}
			</div>
		</div>
	)
}

export default Profile