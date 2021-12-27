import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import axios from 'axios';
import { Divider, Spin, Layout, Typography } from 'antd';
const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
	const [keyword, setKeyword] = useState('');
	const [videos, setVideos] = useState([]);
	const [loading, setLoading] = useState(false);

	async function getData(keyword: string) {
		try {
			setLoading(true);
			const result = await axios.get(
				`${process.env.REACT_APP_API_URL}/youtube/${keyword}`
			);
			setVideos(result.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (keyword) {
			getData(keyword);
		}
	}, [keyword]);

	const handleClick = useCallback(
		(keyword: string) => {
			setKeyword(keyword);
		},
		[setKeyword]
	);

	return (
		<Layout className='App'>
			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Title
					level={2}
					style={{
						color: '#fff',
						marginBottom: '0',
					}}
				>
					YouTube Search
				</Title>
			</Header>
			<Content>
				<SearchBar onClick={handleClick} loading={loading} />
				<Divider />
				{loading ? <Spin /> : <CardList videos={videos} />}
			</Content>
		</Layout>
	);
};

export default App;
