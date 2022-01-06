function Icon(props) {

	let className = "icon ";
	className += props.backgroundColor

	return (
		<div className={className}>
			<img src={props.img} alt={props.alt}/>
		</div>
	)
}

export default Icon