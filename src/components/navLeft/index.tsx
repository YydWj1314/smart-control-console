import { getMenu } from "../../api/users";
import { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import icons from "./iconList";

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
    <div>
      <Menu
        defaultSelectedKeys={["2"]}
        mode="inline"
        theme="dark"
        items={menuData}
      />
    </div>
  );
}

export default NavLeft;
