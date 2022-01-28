import propTypes from "prop-types";

const Icon = ({img, backgroundColor, alt}) => {

	let className = "icon ";
	className += backgroundColor

	return (
		<div className={className}>
			<img src={img} alt={alt}/>
		</div>
	)
}

Icon.propTypes = {
  img: propTypes.string,
	backgroundColor: propTypes.string,
	alt: propTypes.string,
}

export default Icon