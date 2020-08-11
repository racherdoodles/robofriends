import React from 'react';
import Card from './Card';
//import SearchBox from './SearchBox';

const CardList = ({robots}) => {
	return (
		<div>
		{
			robots.map((user, i) => {
			return (
				<Card
				key={user.id}
				id={user.id}
				name={user.name}
				email={user.email}
				/>
				);
			})
		}
		</div>
	);
};

export default CardList;