import React from 'react';
import useArticles from '../../hooks/useArticles';

export const SearchForm = () => {
	const [articles, term , search] = useArticles('javascript');

	return (
		<form>
			<label></label>
			<input
				type="text"
				value={term}
				onChange={e => search(e.target.value)}
			></input>
		</form>
	);
};

export default SearchForm;
