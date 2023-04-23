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
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={["2"]}
          items={items2}
        />
      </Header>
      <Layout>
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
        <Layout style={{ padding: "0 24px 24px" }}>
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
            <AssetTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
