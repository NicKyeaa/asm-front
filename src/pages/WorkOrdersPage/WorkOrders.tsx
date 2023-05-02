import React, { useState } from "react";
import { Col, Row, Card } from "antd";

const tabList = [
  {
    key: "To Do",
    tab: "To Do",
  },
  {
    key: "Done",
    tab: "Done",
  },
];

const WorkOrders: React.FC = () => {
  return (
    <Row gutter={6}>
      <Col span={6} offset={2}>
        <Card
          title='Work Orders'
          tabList={tabList}
          style={{ borderBottom: "dotted" }}
        >
          Col
        </Card>
      </Col>
      <Col span={6} offset={2}>
        Col
      </Col>
    </Row>
  );
};

export default WorkOrders;
