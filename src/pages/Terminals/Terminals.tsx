import { Card, Col, Row } from "antd";

const Page: React.FC = () => {
	let i = 0;
	const listItems = Array(6)
		.fill(null)
		.map(() => (
			<Col span={6} key={i++}>
				<Card title="Card title" bordered={false}>
					Card content {i}
				</Card>
			</Col>
		));

	return <Row gutter={[12, 12]}>{listItems}</Row>;
};
export default Page;
