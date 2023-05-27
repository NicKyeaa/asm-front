import React, { useState } from "react";
import { Col, Row, Card, Space, List } from "antd";
import WorkOrderCard from "./WorkOrderCard";

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
  const workOrdersCardStyles = {
    borderRadius: "15px",
    border: "1px solid rgba(23,45,0,0.20)",
    height: "75vh",
  };

  const workOrderSpaceStyles = {
    width: "inherit",
  };

  return (
    <Row>
      <Col span={8} offset={1}>
        <Card
          title='Work Orders'
          tabList={tabList}
          style={workOrdersCardStyles}
        >
          <Space direction='vertical' size='middle'>
            <WorkOrderCard />
            <WorkOrderCard />
            <WorkOrderCard />
            <WorkOrderCard />
            <WorkOrderCard />
            <WorkOrderCard />
          </Space>
        </Card>
      </Col>
      <Col span={13} offset={1}>
        <Card
          title='Test 2 Column'
          tabList={tabList}
          style={workOrdersCardStyles}
        >
          Col
        </Card>
      </Col>
    </Row>
  );
};

export default WorkOrders;
