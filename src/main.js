import { createApp } from 'vue'
import moment from 'moment-timezone';
import App from './App.vue'

moment.locale('zh-cn');
moment.tz.setDefault('Asia/Shanghai');

const app = createApp(App)

app.config.globalProperties.$moment = moment;
app.mount('#app')
