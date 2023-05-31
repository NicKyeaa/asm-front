import React from "react";
import { Card } from "antd";

const WorkOrderCard: React.FC = () => {
  const workOrderCardStyles = {
    width: "100%",
    border: "1px solid rgba(23,45,0,0.20)",
    padding: "0%",
  };
  return (
    <>
      <Card title='Default Work Order' style={workOrderCardStyles} type='inner'>
        <p>Text</p>
      </Card>
    </>
  );
};

export default WorkOrderCard;
