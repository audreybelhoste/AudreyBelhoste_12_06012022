import Icon from './Icon'
import Yoga from '../assets/icons/yoga.svg'
import Swimming from '../assets/icons/swimming.svg'
import Bike from '../assets/icons/bike.svg'
import Fitness from '../assets/icons/fitness.svg'

function VerticalNav() {
	return (
		<nav className='verticalNav'>
			<Icon 
				img={Yoga}
				alt='Yoga'
			/>
			<Icon 
				img={Swimming}
				alt='Natation'
			/>
			<Icon 
				img={Bike}
				alt='Vélo'
			/>
			<Icon 
				img={Fitness}
				alt='Fitness'
			/>
			<p className='verticalNav__copyright'>Copyright, SportSee 2020</p>
		</nav>
	)
}

export default VerticalNav