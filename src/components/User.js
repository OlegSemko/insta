import React from 'react';

const User = (props) => {
	const {min, alt, src, name} = props;
	return (
		<a href="#" className="user">
			<img src={src} alt={alt}/>
			<div>{name}</div>
		</a>

	)
}

export default User;