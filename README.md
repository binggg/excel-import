# 云函数解析 excel 示例

基于云开发的[Node](https://nodejs.org/zh-cn/)云函数示例

## 使用说明

### 准备工作

 [准备云开发环境和 CloudBase CLI 命令工具](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/CLI_GUIDE.md)

### 修改环境信息和代码

1.  修改 `cloudbaserc.json` 中的环境ID，将  `envId` 对应的值改为自己的环境id
2.  修改代码实现，主要代码在 `functions/excel-import`中

### 安装依赖

命令行运行
```
npm i 
cd functions/excel-import
npm i
cd ../../
```
### 本地开发
```
cd functions/excel-import
node index.js
```
### 配置定时触发

修改 cloudbaserc.json 中的触发器配置 `"config": "0 0 2 1 * * *"`，config 格式为 cron 表达式，规则见 https://docs.cloudbase.net/cli-v1/functions/trigger"

修改之后可以进行部署

### 部署

命令行运行
```
npm run deploy
```
之后可以在云函数中进行测试

## 参考资料

### XLSX 解析 

[xlsx - npm](https://www.npmjs.com/package/xlsx)

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### Node API 文档

查看 [starter](https://nodejs.org/api/).
