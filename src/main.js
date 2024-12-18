import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment-timezone';
import axios from 'axios';
import 'moment-lunar'; 

moment.locale('zh-cn');
moment.tz.setDefault('Asia/Shanghai');

const app = createApp(App)

app.config.globalProperties.$moment = moment;
app.config.globalProperties.$axios = axios;
app.mount('#app')
