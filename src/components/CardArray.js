import React from 'react';
import Card from './Card';

const CardArray = ({ robots }) => {
	return(
		<div>
    {
      robots.map((user, i) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={robots[i].email}
          />
        )
      })
    }
		</div>
	);
}

export default CardArray;