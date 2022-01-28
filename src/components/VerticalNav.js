import Icon from './Icon'
import Yoga from '../assets/icons/yoga.svg'
import Swimming from '../assets/icons/swimming.svg'
import Bike from '../assets/icons/bike.svg'
import Fitness from '../assets/icons/fitness.svg'

const VerticalNav = () => {
	return (
		<nav className='verticalNav'>
			<Icon 
				img={Yoga}
				backgroundColor='bg-white'
				alt='Yoga'
			/>
			<Icon 
				img={Swimming}
				backgroundColor='bg-white'
				alt='Natation'
			/>
			<Icon 
				img={Bike}
				backgroundColor='bg-white'
				alt='Vélo'
			/>
			<Icon 
				img={Fitness}
				backgroundColor='bg-white'
				alt='Fitness'
			/>
			<p className='verticalNav__copyright'>Copyright, SportSee 2020</p>
		</nav>
	)
}

export default VerticalNav