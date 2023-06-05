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

const WorkOrderCardData = [
  {
    title: "Work order 1",
  },
  {
    title: "Work order 2",
  },
  {
    title: "Work order 3",
  },
  {
    title: "Work order 4",
  },
  {
    title: "Work order 5",
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
          bodyStyle={{ padding: "0px" }}
        >
          <List
            dataSource={WorkOrderCardData}
            itemLayout='vertical'
            renderItem={(item) => (
              <List.Item key={item.title} style={{ padding: "0px" }}>
                <WorkOrderCard />
              </List.Item>
            )}
          ></List>
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
