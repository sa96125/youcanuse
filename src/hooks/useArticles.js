import { useEffect, useState } from 'react';

const useArticles = defaultSearchTerm => {
	const [term, setTerm] = useState('');
	const [debounceTerm, setDebounceTerm] = useState('');
	const [articles, setArticles] = useState([]);

	const search = term => setTerm(term);
	const fetchArticle = term => console.log(term);

	useEffect(() => {
		fetchArticle(defaultSearchTerm);
	}, []);

	useEffect(() => {
		const timeoutId = setTimeout(() => setDebounceTerm(term), 700);
		return () => clearTimeout(timeoutId);
	}, [term]);

	useEffect(() => {
		if (!debounceTerm) return;
		fetchArticle(debounceTerm);
	}, [debounceTerm]);

	return [articles, term, search];
};

export default useArticles;
