import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from './style.css';
import MainViewport from '../../components/mainViewport';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>HOME | you can use</title>
			</Helmet>

			<Container>
				<MainViewport />

				{/* # 레이아웃 */}
				<div>
					{/* # 아티클 리스트 */}
					<section>
						{/* # 아티클  */}
						<article></article>
					</section>

					{/* # 아티클 디테일 */}
					<aside>
						{/* # 아티클의 표지 */}
						<iframe></iframe>

						{/* # 설명과 아티클의 정보 */}
						<div></div>

						{/* # 평점, 클릭수, 유저 피드백. */}
						<div></div>
					</aside>
				</div>
			</Container>
		</>
	);
};

export default Home;
