import Mock from "mockjs";
Mock.setup({
  timeout: "200-600",
});

Mock.mock("https://www.demo.com/login", "post", (options: any) => {
  const { username, password } = JSON.parse(options.body);
  console.log("Mockjs values: " + username, password);

  if (username === "admin" && password === "123123") {
    return {
      code: 200,
      message: "Login successfully",
      data: {
        username: "admin",
        token: "THISISMOCKTOKEN_ADMIN123",
      },
    };
  } else if (username === "yyd" && password === "123123") {
    return {
      code: 200,
      message: "Login successfully",
      data: {
        username: "yyd",
        token: "THISISMOCKTOKEN_YYD123",
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
