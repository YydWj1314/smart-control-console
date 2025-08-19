import React from "react";
import {
  UserOutlined,
  PoweroffOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useDispatch, UseDispatch } from "react-redux";
import { clearToken } from "../../store/login/authSlice";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a target="_blank">个人中心</a>,
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: <a target="_blank">退出登陆</a>,
    icon: <PoweroffOutlined />,
  },
];

const MyHeader = () => {
  const dispatch = useDispatch();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "1") {
      // TODO router
    } else {
      dispatch(clearToken());
      sessionStorage.removeItem("username");
    }
  };

  return (
    <Dropdown menu={{ items, onClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hello,{sessionStorage.getItem("username")}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default MyHeader;
