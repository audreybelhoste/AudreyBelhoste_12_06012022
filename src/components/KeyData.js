import Icon from './Icon'

function KeyData({img, backgroundColor, alt, count, element}) {

	return (
		<div className="keyData">
			<Icon 
				img={img}
				backgroundColor={backgroundColor}
				alt={alt}
			/>
			<div>
				<p className="keyData__count">{count}</p>
				<p className="keyData__element">{element}</p>
			</div>
		</div>
	)
}

export default KeyData