import React, { useState } from "react";
import { Col, Row } from "antd";

const WorkOrders: React.FC = () => {
  return (
    <Row gutter={6}>
      <Col span={6} offset={2}>
        Col
      </Col>
      <Col span={6} offset={2}>
        Col
      </Col>
    </Row>
  );
};

export default WorkOrders;
