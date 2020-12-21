import './theme/vue.scss'
var Vue = window.Vue;
import {create} from './../demo-block/plugin'
import * as Components from '../../src/components/index.js'
import DashboardPlugin from '../../src/dashboard-plugin'
import HeaderChart from '../../src/pages/Dashboard/Dashboard/HeaderChart';
import {Select, Option, Tag, Slider, DatePicker, TimePicker, Progress, Tooltip, Popover} from '../../node_modules/element-ui'
import '../../node_modules/element-ui/packages/theme-chalk/src/index.scss'
import swal from '../../node_modules/sweetalert2'
import '../../node_modules/sweetalert2/dist/sweetalert2.css'
window.swal = swal

Vue.use(DashboardPlugin)

Vue.use(Select)
Vue.use(Option)
Vue.use(Tag)
Vue.use(Slider)
Vue.use(DatePicker)
Vue.use(Progress)
Vue.use(TimePicker)
Vue.use(Tooltip)
Vue.use(Popover)
Vue.component(HeaderChart.name, HeaderChart);

for (let key in Components) {
  const toRegister = Components[key]
  if (toRegister.install) {
    Vue.use(toRegister)
  } else {
    if(toRegister.name) {
      Vue.component(toRegister.name, toRegister)
    }

  }
}

window.DemoBoxVue = {
  create
}
