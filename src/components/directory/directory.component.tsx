import { Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.components';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
	id: Key;
	title: string;
	imageUrl: string;
	route: string;
}

const categories: DirectoryCategory[] = [
	{
		id: 1,
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		route: 'shop/hats',
	},
	{
		id: 2,
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		route: 'shop/jackets',
	},
	{
		id: 3,
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		route: 'shop/sneakers',
	},
	{
		id: 4,
		title: 'women',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		route: 'shop/womens',
	},
	{
		id: 5,
		title: 'men',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		route: 'shop/mens',
	},
];

function Directory() {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
}

export default Directory;