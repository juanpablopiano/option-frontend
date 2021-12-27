import React from 'react';
import { Card, Col, Row, Typography, Image } from 'antd';
import { Video } from '../types';
const { Link } = Typography;

const { Meta } = Card;

interface CardListProps {
	videos: Video[];
}

const CardList: React.FC<CardListProps> = ({ videos }) => {
	return (
		<Row justify='space-between'>
			{videos.length> 0 ? videos.map((video: Video) => (
				<Col role="carditem" key={video.etag} span={24} sm={10} md={8} lg={6} xl={4} style={{
					display: 'flex',
					justifyContent: 'center',
				}} >
					<Link
						href={`https://www.youtube.com/watch?v=${video.id.videoId!}`}
						target='_blank'
					>
						<Card
							style={{ width: 300, marginBottom: '1rem', minHeight: '400px' }}
							cover={
								<Image
									alt='example'
									src={video.snippet!.thumbnails.default.url}
								/>
							}
						>
							<Meta
								title={video.snippet!.title}
								description={video.snippet!.description}
							/>
						</Card>
					</Link>
				</Col>
			)) : []}
		</Row>
	);
};

export default CardList;
