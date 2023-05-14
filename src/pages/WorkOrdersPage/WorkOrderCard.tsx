import React from "react";
import { Card } from "antd";

const WorkOrderCard: React.FC = () => {
  const workOrderCardStyles = {
    width: "inherit",
  };
  return (
    <>
      <Card title='Default Work Order' style={workOrderCardStyles}>
        <p>Text</p>
      </Card>
    </>
  );
};

export default WorkOrderCard;
