import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  MenuOutlined,
  BookOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >

        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <UserOutlined />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/admin/menu">
          <Link to={"/admin/menu"}>
            <MenuOutlined />
            <span className="nav-text">Menú</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/admin/courses">
          <Link to="/admin/courses">
            <BookOutlined />
            <span className="nac-text">Productos</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/admin/blog">
          <Link to="/admin/blog">
            <MessageOutlined />
            <span className="nac-text">Blog</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
