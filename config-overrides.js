const {
  override,
  fixBabelImports,
  addLessLoader, //使用less样式文件
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, //将导入css更改为less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  })
);
