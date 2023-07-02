import DirectoryItem from '../category-item/directory-item.components';
import './directory.styles.scss';

function Directory({ categories }) {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</div>
	);
}

export default Directory;
