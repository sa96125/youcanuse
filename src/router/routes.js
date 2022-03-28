import React, { useEffect, lazy, Suspense, memo } from 'react';
import { Routes as RouteList, Route, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '../components/error';
import PuffLoader from 'react-spinners/PuffLoader';

const Home = lazy(() => import('../pages/_home'));
const ArticlesBest = lazy(() => import('../pages/articleBest'));
const ArticlesCreate = lazy(() => import('../pages/articleCreate'));
const Profile = lazy(() => import('../pages/profile'));
const LoginRequired = lazy(() => import('../pages/loginRequired'));
const NotFound = lazy(() => import('../pages/notFound'));

const RoutesListWithoutLogin = [
	{ path: '/', element: <Home /> },
	{ path: '/rank', element: <ArticlesBest /> },
];

const RoutesListWithLogin = [
	{ path: '/new', element: <ArticlesCreate /> },
	{ path: '/setting', element: <Profile /> },
];

const Routes = ({ isSignedIn }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<ErrorBoundary>
			<Suspense fallback={<PuffLoader size={15} color={'#fcba03'} />}>
				<RouteList>
					{RoutesListWithoutLogin.map((route, index) => {
						return <Route exact {...route} key={index} />;
					})}
					{RoutesListWithLogin.map((route, index) => {
						return (
							<Route
								exact
								key={index}
								path={route.path}
								element={
									isSignedIn ? route.element : <LoginRequired />
								}
								onUpdate={() => window.scrollTo(0, 0)}
							/>
						);
					})}
					<Route path="*" element={<NotFound />} />
				</RouteList>
			</Suspense>
		</ErrorBoundary>
	);
};

export default memo(Routes, (currProps, nextProps) => {
	return currProps.isSignedIn !== nextProps.isSignedIn;
});
