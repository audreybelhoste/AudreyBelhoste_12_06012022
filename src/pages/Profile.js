import { getUserById } from "../services/userService"
import Clap from "../assets/img/clap.png"
import KeyData from "../components/KeyData"
import Calorie from '../assets/icons/calorie.svg'
import Protein from '../assets/icons/protein.svg'
import Carbohydrate from '../assets/icons/carbohydrate.svg'
import Lipid from '../assets/icons/lipid.svg'

function Profile() {
	let user = getUserById(12)

	return (
		<div class="profile">
			<div className="userInfos">
				<h1 className="userInfos__title">Bonjour <span className="userInfos__title__color">{user.userInfos.firstName}</span></h1>
				<p className="userInfos__text">Félicitation ! Vous avez explosé vos objectifs hier !<img src={Clap} alt="applaudissements" className="userInfos__text__clap"></img></p>
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
	)
}

export default Profile