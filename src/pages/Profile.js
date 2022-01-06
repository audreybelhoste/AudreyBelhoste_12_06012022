import { getUserById } from "../services/userService"
import Clap from "../assets/img/clap.png"

function Profile() {
	let user = getUserById(12)

	return (
		<div className="profile">
			<h1 className="profile__title">Bonjour <span className="profile__title__color">{user.userInfos.firstName}</span></h1>
			<p className="profile__text">Félicitation ! Vous avez explosé vos objectifs hier !<img src={Clap} alt="applaudissements" className="profile__text__clap"></img></p>
		</div>
	)
}

export default Profile