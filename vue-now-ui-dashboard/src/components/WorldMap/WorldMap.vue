<template>
  <div id="worldMap" style="height: 300px;"></div>
</template>
<script>
  import 'd3';
  import * as d3 from 'd3';
  import 'topojson';
  import DataMap from 'datamaps';
  import { throttle } from 'src/util/throttle';

  export default {
    data() {
      return {
        color1: '#AAAAAA',
        color2: '#444444',
        highlightFillColor: '#66615B',
        borderColor: '#3c3c3c',
        highlightBorderColor: '#3c3c3c',
        mapData: {
          AUS: 760,
          BRA: 550,
          CAN: 120,
          DEU: 1300,
          FRA: 540,
          GBR: 690,
          GEO: 200,
          IND: 200,
          ROU: 600,
          RUS: 300,
          USA: 2920
        }
      };
    },
    methods: {
      generateColors(length) {
        return d3
          .scaleLinear()
          .domain([0, length])
          .range([this.color1, this.color2]);
      },
      generateMapColors() {
        let mapDataValues = Object.values(this.mapData);
        let maxVal = Math.max(...mapDataValues);
        let colors = this.generateColors(maxVal);
        let mapData = {};
        let fills = {
          defaultFill: '#e4e4e4'
        };
        for (let key in this.mapData) {
          let val = this.mapData[key];
          fills[key] = colors(val);
          mapData[key] = {
            fillKey: key,
            value: val
          };
        }
        return {
          mapData,
          fills
        };
      },
      initVectorMap() {
        let { fills, mapData } = this.generateMapColors();
        let worldMap = new DataMap({
          scope: 'world',
          element: document.getElementById('worldMap'),
          fills,
          data: mapData,
          responsive: true,
          geographyConfig: {
            borderColor: this.borderColor,
            borderWidth: 0.5,
            borderOpacity: 0.8,
            highlightFillColor: this.highlightFillColor,
            highlightBorderColor: this.highlightBorderColor,
            highlightBorderWidth: 0.5,
            highlightBorderOpacity: 0.8
          }
        });
        let resizeFunc = worldMap.resize.bind(worldMap);
        window.addEventListener('resize', () => {
          throttle(resizeFunc, 40);
        }, false);
      }
    },
    async mounted() {
      this.initVectorMap();
    }
  };
</script>
<style></style>
