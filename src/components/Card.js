import React from 'react';

const Card = ({ name, id, email }) => {
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw5 shadow-5'>
			<img alt='robot' src={`https://robohash.org/set_set3/${id}?size=200x200`}></img>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;