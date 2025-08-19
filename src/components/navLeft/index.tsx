import { getMenu } from "../../api/users";
import { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import icons from "./iconList";
import logo from "../../assets/logo.png";
import "./index.scss";

type MenuItem = Required<MenuProps>["items"][number];

interface MenuItemFromData {
  key: string;
  label: string;
  icon: string;
  children?: MenuItemFromData[];
}

function NavLeft() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);

  // Once load the page, get menu data
  // use effct cannot defined as async
  useEffect(() => {
    configMenu();
  }, []);

  async function configMenu() {
    const { data } = await getMenu();
    const mappedMenuData: MenuItem[] = mapMenuItems(data);
    setMenuData(mappedMenuData);
  }

  /**
   * Format menu data
   */
  function mapMenuItems(items: MenuItemFromData[]): any {
    return items.map((item: MenuItemFromData) => ({
      key: item.key,
      label: item.label,
      icon: icons[item.icon],
      children: item.children ? mapMenuItems(item.children) : null,
    }));
  }

  return (
    <div className="navLeft">
      <div className="logo">
        <img src={logo} alt="" width={18} />
        <h1>智慧园区</h1>
      </div>
      <Menu
        defaultSelectedKeys={["/dashboard"]}
        mode="inline"
        theme="dark"
        items={menuData}
      />
    </div>
  );
}

export default NavLeft;
