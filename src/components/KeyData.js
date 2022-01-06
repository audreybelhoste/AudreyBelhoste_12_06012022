import Icon from './Icon'


function KeyData(props) {
	return (
		<div className="keyData">
			<Icon 
				img={props.img}
				backgroundColor={props.backgroundColor}
				alt={props.alt}
			/>
			<div>
				<p className="keyData__count">{props.count}</p>
				<p className="keyData__element">{props.element}</p>
			</div>
		</div>
	)
}

export default KeyData