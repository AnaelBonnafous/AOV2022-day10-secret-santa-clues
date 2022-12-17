import { createApp } from 'vue'
import App from './App.vue'

import 'swiper/css'
import 'atropos/css'
import './base.css'

import { themeChange } from 'theme-change'

themeChange()

createApp(App).mount('#app')
