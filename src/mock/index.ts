import Mock from "mockjs";
Mock.setup({
  timeout: "200-600",
});

// Login api
Mock.mock("https://www.demo.com/login", "post", (options: any) => {
  const { username, password } = JSON.parse(options.body);
  console.log("Mockjs values: " + username, password);

  if (username === "admin" && password === "123123") {
    return {
      code: 200,
      message: "Login successfully",
      data: {
        username: "admin",
        token: "mocktoken123456admin",
      },
    };
  } else if (username === "yyd" && password === "123123") {
    return {
      code: 200,
      message: "Login successfully",
      data: {
        username: "yyd",
        token: "mocktoken123456manager",
      },
    };
  } else {
    return {
      code: 401,
      message: "Login Failed ",
      data: "",
    };
  }
});

const menuList = [
  {
    icon: "DashboardOutlined",
    label: "工作台",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "租户管理",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "租户列表",
        key: "/users/list",
      },
      {
        icon: "UserAddOutlined",
        label: "新增租户",
        key: "/users/add",
      },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "物业管理",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "楼宇管理",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "房间管理",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "车辆信息",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "报修管理",
    key: "/repair",
  },
  {
    icon: "DollarOutlined",
    label: "财务管理",
    key: "/finance",
    children: [
      {
        icon: "ProfileOutlined",
        label: "合同管理",
        key: "/finance/contract",
      },
      {
        icon: "FrownOutlined",
        label: "合同详情",
        key: "/finance/surrender",
      },
      {
        icon: "FileTextOutlined",
        label: "账单管理",
        key: "/finance/bill",
      },
    ],
  },
  {
    icon: "TransactionOutlined",
    label: "招商管理",
    key: "/merchants",
  },
  {
    icon: "FundProjectionScreenOutlined",
    label: "运营管理",
    key: "/operation",
    children: [
      {
        icon: "FundViewOutlined",
        label: "运营总览",
        key: "/operation/all",
      },
      {
        icon: "ReadOutlined",
        label: "文章发布",
        key: "/operation/article",
      },
      {
        icon: "CommentOutlined",
        label: "内容评论",
        key: "/operation/comments",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "设备管理",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "能源消耗",
    key: "/energy",
  },
  {
    icon: "SettingOutlined",
    label: "系统设置",
    key: "/settings",
  },
  {
    icon: "UserOutlined",
    label: "个人中心",
    key: "/personal",
  },
];

const userMenuList = [
  {
    icon: "DashboardOutlined",
    label: "工作台",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "租户管理",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "租户列表",
        key: "/users/list",
      },
      {
        icon: "UserAddOutlined",
        label: "新增租户",
        key: "/users/add",
      },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "物业管理",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "楼宇管理",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "房间管理",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "车辆信息",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "报修管理",
    key: "/repair",
  },
  {
    icon: "ToolOutlined",
    label: "设备管理",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "能源消耗",
    key: "/energy",
  },
  {
    icon: "UserOutlined",
    label: "个人中心",
    key: "/personal",
  },
];

const managerMenuList = [
  {
    icon: "DashboardOutlined",
    label: "工作台",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "租户管理",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "租户列表",
        key: "/users/list",
      },
      {
        icon: "UserAddOutlined",
        label: "新增租户",
        key: "/users/add",
      },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "物业管理",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "楼宇管理",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "房间管理",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "车辆信息",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "报修管理",
    key: "/repair",
  },
  {
    icon: "TransactionOutlined",
    label: "招商管理",
    key: "/merchants",
  },
  {
    icon: "FundProjectionScreenOutlined",
    label: "运营管理",
    key: "/operation",
    children: [
      {
        icon: "FundViewOutlined",
        label: "运营总览",
        key: "/operation/all",
      },
      {
        icon: "ReadOutlined",
        label: "文章发布",
        key: "/operation/article",
      },
      {
        icon: "CommentOutlined",
        label: "内容评论",
        key: "/operation/comments",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "设备管理",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "能源消耗",
    key: "/energy",
  },
  {
    icon: "SettingOutlined",
    label: "系统设置",
    key: "/settings",
  },
  {
    icon: "UserOutlined",
    label: "个人中心",
    key: "/personal",
  },
];

const customizeMenuList = [
  {
    icon: "DashboardOutlined",
    label: "工作台",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "租户管理",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "租户列表",
        key: "/users/list",
      },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "物业管理",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "楼宇管理",
        key: "/estate/tenement",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "报修管理",
    key: "/repair",
  },
  {
    icon: "ToolOutlined",
    label: "设备管理",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "能源消耗",
    key: "/energy",
  },
  {
    icon: "UserOutlined",
    label: "个人中心",
    key: "/personal",
  },
];

// Menu api
Mock.mock("https://www.demo.com/menu", "get", (options: any) => {
  const token = sessionStorage.getItem("token"); // get token frin session
  if (token == "mocktoken123456admin") {
    return {
      code: 200,
      message: "请求成功",
      data: menuList,
    };
  } else if (token == "mocktoken123456user") {
    return {
      code: 200,
      message: "请求成功",
      data: userMenuList,
    };
  } else if (token == "mocktoken123456manager") {
    return {
      code: 200,
      message: "请求成功",
      data: managerMenuList,
    };
  } else {
    return {
      code: 200,
      message: "失败",
      data: [],
    };
  }
});
