# Charts

<hr>

For the implementation of graphic charts, we used [Chart.js](http://www.chartjs.org/) 
in combination with [Vue Chart.js](http://vue-chartjs.org/#/home) which is a Vue wrapper for 
Chart.js
Vue Chart.js works by extending some predefined components and customizing Chart.js options before rendering them.


## Usage
To use Chart components, you directly use the provided components from `Vue Chart.js` or 
create your own by extending them. You can find 2 such components inside
`src/components/Charts`. Feel free to adjust and customize them according to your needs :)

Using the custom chart components

```js
import {LineChart, BarChart} from 'src/components';
```

In component declaration 
```js
export default {
  components: {
    LineChart,
    BarChart
  }
}
```

### Simple Line chart 
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
   <line-chart :labels="lineChart1.labels"
              :data="lineChart1.data"
              :color="lineChart1.color"
              :height="200">
   </line-chart>
  </div>
</template>
<script>
  export default{
   data(){
     return {
       lineChart1: {
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
         color: '#f96332'
       }
     }
   }
  }
</script>
```

### Bar Chart with multiple datasets
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
   <bar-chart :labels="barChart2.labels"
             :datasets="barChart2.datasets"
             :height="200">
   </bar-chart>
  </div>
</template>
<script>
  export default{
   data(){
     return {
       barChart2: {
         labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         datasets: [
           {
             backgroundColor: "#f96332",
             data: [40, 26, 28, 45, 20, 25, 30, 25, 20, 25, 20, 15,]
           },
           {
             backgroundColor: "#2CA8FF",
             data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20]
           }
         ]
       }

     }
   }
  }
</script>
```

## Chart Card
You can combine the `card` as well as other components together with the `chart` component to achieve some beautiful, user-friendly 
chart cards like the ones on the Overview page

```html
/*vue*/
<desc>
</desc>
<template>
  <div>
   <card class="card-chart" no-footer-line>
       <div slot="header">
         <h5 class="card-category">Summer Email Campaign</h5>
         <h2 class="card-title">
           <animated-number :value="55300">
           </animated-number>
         </h2>
         <drop-down>
           <n-button slot="title" class="dropdown-toggle no-caret" round simple icon>
             <i class="now-ui-icons loader_gear"></i>
           </n-button>

           <a class="dropdown-item" href="#">Action</a>
           <a class="dropdown-item" href="#">Another action</a>
           <a class="dropdown-item" href="#">Something else here</a>
           <a class="dropdown-item text-danger" href="#">Remove Data</a>
         </drop-down>

       </div>
       <div class="chart-area">
         <line-chart :labels="charts.emailsCampaign.labels"
                    :data="charts.emailsCampaign.data"
                    :color="charts.emailsCampaign.color"
                    :height="200">
         </line-chart>
       </div>
       <div class="card-progress">
         <n-progress label="Delivery Rate" :value="90" show-value></n-progress>
         <n-progress type="success" label="Open Rate" :value="60" show-value></n-progress>
         <n-progress type="info" label="Click Rate" :value="12" show-value></n-progress>
         <n-progress type="warning" label="Hard Bounce" :value="5" show-value></n-progress>
         <n-progress type="danger" label="Spam Report" :value="0.11" show-value></n-progress>
       </div>
       <div slot="footer" class="stats">
         <i class="now-ui-icons arrows-1_refresh-69"></i> Just Updated
       </div>
     </card>
  </div>
</template>
<script>
  export default{
   data(){
     return {
       charts: {
         emailsCampaign: {
           labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
           data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
           color: '#18ce0f'
         }
       }
     }
   }
  }
</script>
```

### Upper Header chart
```html
/*vue*/
<desc>
</desc>
<template>
  <div class="panel-header panel-header-lg">
      <header-chart :height="255"
                   :data="chartData"
                   :labels="chartLabels">
     </header-chart>
  </div>
</template>
<script>
  export default{
   data(){
     return {
       chartData: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
       chartLabels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
     }
   }
  }
</script>
```



!> **Note** You can also refer to other examples with chart-cards which can be found in `src/pages/Dashboard/Dashboard/Overview.vue`
and `src/pages/Dashboard/Charts.vue`

### Line chart

| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| labels     | Chart [labels](http://www.chartjs.org/docs/latest/charts/line.html#line)   | -  |       -        |     []     |
| datasets     | Chart [datasets](http://www.chartjs.org/docs/latest/charts/line.html#line)   | array  |       -        |     -     |
| data     | Chart [data](http://www.chartjs.org/docs/latest/charts/line.html#line) in case there is only one data array  | array  |       -        |     []     |
| color     | Sets `borderColor`, `pointBackgroundColor` and a gradient for `backgroundColor`. Applies only to a single dataset (single line or bar series) | string  |       -        |     #f96332     |
| extraOptions     | Extra Chart [configurations](http://www.chartjs.org/docs/latest/configuration/animations.html)   | object  |       -        |     -     |


### Bar chart

| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| labels     | Chart [labels](http://www.chartjs.org/docs/latest/charts/bar.html)   | -  |       -        |     []     |
| datasets     | Chart [datasets](http://www.chartjs.org/docs/latest/charts/bar.html)   | array  |       -        |     -     |
| data     | Chart [data](http://www.chartjs.org/docs/latest/charts/bar.html) in case there is only one data array  | array  |       -        |     []     |
| color     | Sets `borderColor`, `pointBackgroundColor` and a gradient for `backgroundColor`. Applies only to a single dataset (single line or bar series) | string  |       -        |     #f96332     |
| extraOptions     | Extra Chart [configurations](http://www.chartjs.org/docs/latest/configuration/animations.html)   | object  |       -        |     -     |

For more chart components and options please visit [Vue Chart.js](http://vue-chartjs.org/#/home?id=quick-start)
and [Chart.js](http://www.chartjs.org/docs/latest/getting-started/)
