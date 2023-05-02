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
  const WorkOrdersCardStyles = {
    borderRadius: "15px",
    border: "1px solid rgba(23,45,0,0.20)",
    height: "75vh",
  };

  return (
    <Row>
      <Col span={8} offset={1}>
        <Card
          title='Work Orders'
          tabList={tabList}
          style={WorkOrdersCardStyles}
        >
          Col
        </Card>
      </Col>
      <Col span={13} offset={1}>
        <Card
          title='Test 2 Column'
          tabList={tabList}
          style={WorkOrdersCardStyles}
        >
          Col
        </Card>
      </Col>
    </Row>
  );
};

export default WorkOrders;
