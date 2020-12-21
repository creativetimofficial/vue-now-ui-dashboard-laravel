import { Line } from 'vue-chartjs';
import { hexToRGB } from './utils';

const chartColor = '#FFFFFF';
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest',
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

export default {
  name: 'line-chart',
  extends: Line,
  props: ['labels', 'datasets', 'data', 'color', 'extraOptions', 'title'],
  mounted() {
    let fallBackColor = '#f96332';
    let color = this.color || fallBackColor;
    const ctx = document.getElementById(this.chartId).getContext('2d');
    const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, color);
    gradientStroke.addColorStop(1, chartColor);

    const gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    gradientFill.addColorStop(1, hexToRGB(color, 0.4));

    let chartOptions = Object.assign(
      gradientChartOptionsConfiguration,
      this.extraOptions || {}
    );
    this.renderChart(
      {
        labels: this.labels || [],
        datasets: this.datasets
          ? this.datasets
          : [
              {
                label: this.title || '',
                borderColor: color,
                pointBorderColor: '#FFF',
                pointBackgroundColor: color,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: this.data || []
              }
            ]
      },
      chartOptions
    );
  }
};
