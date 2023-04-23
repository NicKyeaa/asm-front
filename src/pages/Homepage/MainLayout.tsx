import React from "react";
import { BookOutlined, ClusterOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

// Components Import
import AssetTable from "../AssetsPage/AssetTable";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: "1",
    icon: <BookOutlined />,
    label: "Work orders",
  },
  {
    key: "2",
    icon: <ClusterOutlined />,
    label: "Assets",
  },
];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={200}
        style={{
          background: colorBgContainer,
          position: "fixed",
        }}
      >
        <Menu
          mode='inline'
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout className='site-layout'>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <AssetTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
