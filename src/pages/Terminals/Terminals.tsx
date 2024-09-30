import { Card, Col, Row } from "antd";

const Page: React.FC = () => {
	return (
		<Row gutter={[16, 16]}>
			<Col span={6}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
			<Col span={6}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
			<Col span={6}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
			<Col span={6}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
			<Col span={6}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
		</Row>
	);
};
export default Page;
