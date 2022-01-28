import Logo from '../assets/logo.png'

const HorizontalNav = () => {
	return (
		<nav className='horizontalNav'>
			<img src={Logo} alt='Logo SportSee'/>
			<ul className='horizontalNav__list'>
				<li className='horizontalNav__list__item'>Accueil</li>
				<li className='horizontalNav__list__item'>Profil</li>
				<li className='horizontalNav__list__item'>Réglage</li>
				<li className='horizontalNav__list__item'>Communauté</li>
			</ul>
		</nav>
	)
}

export default HorizontalNav