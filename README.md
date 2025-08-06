# 天气预测应用 (Weather Prediction)

一个基于 Vue 3 的现代化天气预测应用，提供实时天气信息、7 天天气预报和空气质量指数显示。

## 功能特色

- 🌤️ **实时天气信息** - 显示当前温度、天气状况、湿度等详细信息
- 📅 **7 天天气预报** - 提供未来一周的天气预测
- 🌬️ **空气质量监测** - 实时显示空气质量指数(AQI)
- ⏰ **实时时间显示** - 包含当前时间和日期
- 📱 **响应式设计** - 适配不同屏幕尺寸
- 🔄 **自动更新** - 每小时自动刷新天气数据

## 技术栈

- **前端框架**: Vue 3
- **HTTP 客户端**: Axios
- **时间处理**: Moment.js
- **天气数据**: 和风天气 API
- **构建工具**: Vue CLI

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/EthanolM/WeatherPrediction.git
cd WeatherPrediction
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置 API 密钥

在开始使用之前，你需要获取和风天气的 API 密钥：

1. 访问 [和风天气开发平台](https://dev.qweather.com/)
2. 注册账号并创建应用
3. 获取你的 API 密钥

然后修改 `src/components/WeatherDashboard.vue` 文件：

```javascript
// 在文件中找到这一行并替换为你的 API 密钥
const he_key = "请输入你的和风天气API密钥";
```

### 4. 配置城市信息

你可以修改默认显示的城市，在 `src/components/WeatherDashboard.vue` 中：

```javascript
// 修改城市 ID（默认为郑州：101180101）
const city = "101180101"; // 请替换为你想要的城市 ID
```

#### 常用城市 ID 参考：

| 城市 | ID        |
| ---- | --------- |
| 北京 | 101010100 |
| 上海 | 101020100 |
| 广州 | 101280101 |
| 深圳 | 101280601 |
| 杭州 | 101210101 |
| 南京 | 101190101 |
| 武汉 | 101200101 |
| 成都 | 101270101 |
| 西安 | 101110101 |
| 郑州 | 101180101 |

更多城市 ID 可在[和风天气城市列表](https://github.com/qwd/LocationList)中查找。

### 5. 运行项目

#### 开发环境运行

```bash
npm run serve
```

项目将在 `http://localhost:8080` 启动

#### 生产环境构建

```bash
npm run build
```

#### 代码检查和修复

```bash
npm run lint
```

## 项目结构

```
WeatherPrediction/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AirQuility.vue      # 空气质量组件
│   │   ├── CurrentTime.vue     # 当前时间组件
│   │   ├── CurrentWeather.vue  # 当前天气组件
│   │   ├── DrawTemp.vue        # 温度图表组件
│   │   ├── FutureWeather.vue   # 未来天气组件
│   │   └── WeatherDashboard.vue # 主仪表板组件
│   ├── App.vue
│   └── main.js
├── babel.config.js
├── jsconfig.json
├── package.json
├── README.md
└── vue.config.js
```

## API 配置说明

### 和风天气 API

本项目使用以下和风天气 API 接口：

1. **实时天气**: `https://devapi.qweather.com/v7/weather/now`
2. **7 天预报**: `https://devapi.qweather.com/v7/weather/7d`
3. **空气质量**: `https://devapi.qweather.com/airquality/v1/current`

### API 密钥配置

请确保你的 API 密钥有足够的调用次数限制。免费版本通常有每日调用次数限制。

## 自定义配置

### 修改刷新间隔

在 `WeatherDashboard.vue` 的 `mounted` 方法中，你可以修改数据刷新间隔：

```javascript
// 当前设置为每小时刷新一次（3600秒）
this.timer = setInterval(() => {
  // 刷新逻辑
}, 1000 * 3600); // 修改这个数值来改变刷新间隔
```

### 样式自定义

项目使用了渐变背景和响应式设计，你可以在各个组件的 `<style>` 部分自定义样式。

## 浏览器支持

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 贡献

欢迎提交 Pull Request 或创建 Issue 来改进这个项目！

## 联系

如果你有任何问题或建议，请通过以下方式联系：

- GitHub Issues: [创建新 Issue](https://github.com/EthanolM/WeatherPrediction/issues)
- 项目主页: [WeatherPrediction](https://github.com/EthanolM/WeatherPrediction)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
