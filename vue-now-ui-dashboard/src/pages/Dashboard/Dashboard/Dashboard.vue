<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-stats card-raised">
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-primary">
                      <i class="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="853"></animated-number>
                    </h3>
                    <h6 class="stats-title">Messages</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-success">
                      <i class="now-ui-icons business_money-coins"></i>
                    </div>
                    <h3 class="info-title">
                      <small>$</small>
                      <animated-number :value="3521"></animated-number>
                    </h3>
                    <h6 class="stats-title">Today Revenue</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-info">
                      <i class="now-ui-icons users_single-02"></i>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="562"></animated-number>
                    </h3>
                    <h6 class="stats-title">Customers</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-danger">
                      <i class="now-ui-icons objects_support-17"></i>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="353"></animated-number>
                    </h3>
                    <h6 class="stats-title">Support Requests</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <card class="card-chart" no-footer-line>
          <div slot="header">
            <h5 class="card-category">Active Users</h5>
            <h2 class="card-title">
              <animated-number :value="34252"> </animated-number>
            </h2>
            <drop-down :hide-arrow="true" position="right">
              <n-button
                slot="title"
                class="dropdown-toggle no-caret"
                round
                simple
                icon
              >
                <i class="now-ui-icons loader_gear"></i>
              </n-button>

              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <a class="dropdown-item text-danger" href="#">Remove Data</a>
            </drop-down>
          </div>
          <div class="chart-area">
            <line-chart
              :labels="charts.activeUsers.labels"
              :data="charts.activeUsers.data"
              :color="charts.activeUsers.color"
              :height="200"
            >
            </line-chart>
          </div>
          <div class="table-responsive">
            <n-table :data="tableData">
              <template slot-scope="{ row }">
                <td>
                  <div class="flag">
                    <img :src="row.flag" />
                  </div>
                </td>
                <td>{{ row.country }}</td>
                <td class="text-right">
                  {{ row.value }}
                </td>
                <td class="text-right">
                  {{ row.percentage }}
                </td>
              </template>
            </n-table>
          </div>
          <div slot="footer" class="stats">
            <i class="now-ui-icons arrows-1_refresh-69"></i> Just Updated
          </div>
        </card>
      </div>

      <div class="col-lg-4">
        <card class="card-chart" no-footer-line>
          <div slot="header">
            <h5 class="card-category">Summer Email Campaign</h5>
            <h2 class="card-title">
              <animated-number :value="55300"> </animated-number>
            </h2>
            <drop-down position="right">
              <n-button
                slot="title"
                class="dropdown-toggle no-caret"
                round
                simple
                icon
              >
                <i class="now-ui-icons loader_gear"></i>
              </n-button>

              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <a class="dropdown-item text-danger" href="#">Remove Data</a>
            </drop-down>
          </div>
          <div class="chart-area">
            <line-chart
              :labels="charts.emailsCampaign.labels"
              :data="charts.emailsCampaign.data"
              :color="charts.emailsCampaign.color"
              :height="200"
            >
            </line-chart>
          </div>
          <div class="card-progress">
            <n-progress
              label="Delivery Rate"
              :value="90"
              show-value
            ></n-progress>
            <n-progress
              type="success"
              label="Open Rate"
              :value="60"
              show-value
            ></n-progress>
            <n-progress
              type="info"
              label="Click Rate"
              :value="12"
              show-value
            ></n-progress>
            <n-progress
              type="warning"
              label="Hard Bounce"
              :value="5"
              show-value
            ></n-progress>
            <n-progress
              type="danger"
              label="Spam Report"
              :value="0.11"
              show-value
            ></n-progress>
          </div>
          <div slot="footer" class="stats">
            <i class="now-ui-icons arrows-1_refresh-69"></i> Just Updated
          </div>
        </card>
      </div>

      <div class="col-lg-4">
        <card class="card-chart" no-footer-line>
          <div slot="header">
            <h5 class="card-category">Active Countries</h5>
            <h2 class="card-title">
              <animated-number :value="105"> </animated-number>
            </h2>
          </div>
          <div class="chart-area">
            <line-chart
              :labels="charts.activeCountries.labels"
              :data="charts.activeCountries.data"
              :color="charts.activeCountries.color"
              :height="200"
            >
            </line-chart>
          </div>

          <async-world-map class="map" :data="mapData"></async-world-map>

          <div slot="footer" class="stats">
            <i class="now-ui-icons arrows-1_refresh-69"></i> Just Updated
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <card>
          <h4 slot="header" class="card-title">Best Selling Products</h4>
          <div class="table-responsive">
            <n-table class="table-shopping" :data="productsTable">
              <template slot="columns">
                <th class="text-center"></th>
                <th>Product</th>
                <th>Color</th>
                <th>Size</th>
                <th class="text-right">Price</th>
                <th class="text-right">Qty</th>
                <th class="text-right">Amount</th>
              </template>
              <template slot-scope="{ row }">
                <td>
                  <div class="img-container">
                    <img :src="row.image" alt="..." />
                  </div>
                </td>
                <td class="td-name">
                  <a href="#jacket">{{ row.title }}</a>
                  <br />
                  <small>{{ row.subTitle }}</small>
                </td>
                <td>{{ row.color }}</td>
                <td>{{ row.size }}</td>
                <td class="td-number">
                  <small>€</small>
                  {{ row.price }}
                </td>
                <td class="td-number">
                  {{ row.quantity }}
                </td>
                <td class="td-number">
                  <small>€</small>
                  {{ row.amount }}
                </td>
              </template>
              <template slot="summary-row">
                <td colspan="5"></td>
                <td class="td-total">Total</td>
                <td class="td-price">
                  <small>€</small>
                  2,346
                </td>
              </template>
            </n-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Card,
  Table as NTable,
  Checkbox,
  AnimatedNumber,
  Progress as NProgress,
  AsyncWorldMap,
} from "src/components";

import LineChart from "src/components/Charts/LineChart";

export default {
  components: {
    Card,
    NTable,
    AnimatedNumber,
    LineChart,
    NProgress,
    AsyncWorldMap,
  },
  data() {
    return {
      progress: 0,
      charts: {
        activeUsers: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
          color: "#f96332",
        },
        emailsCampaign: {
          labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
          color: "#18ce0f",
        },
        activeCountries: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
          ],
          data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90],
          color: "#2CA8FF",
        },
      },
      tableData: [
        {
          flag: "/img/US.png",
          country: "USA",
          value: "2.920",
          percentage: "53.23%",
        },
        {
          flag: "/img/DE.png",
          country: "Germany",
          value: "1.300",
          percentage: "20.43%",
        },
        {
          flag: "/img/AU.png",
          country: "Australia",
          value: "760",
          percentage: "10.35%",
        },
        {
          flag: "/img/GB.png",
          country: "United Kingdom",
          value: "690",
          percentage: "7.87%",
        },
        {
          flag: "/img/RO.png",
          country: "United Kingdom",
          value: "600",
          percentage: "5.94%",
        },
        {
          flag: "/img/BR.png",
          country: "Brasil",
          value: "550",
          percentage: "4.34%",
        },
      ],
      productsTable: [
        {
          image: "/img/saint-laurent.jpg",
          title: "Suede Biker Jacket",
          subTitle: "by Saint Laurent",
          color: "Black",
          size: "M",
          price: 3390,
          quantity: 1,
          amount: 3390,
        },
        {
          image: "/img/balmain.jpg",
          title: "Jersey T-Shirt ",
          subTitle: "by Balmain",
          color: "Black",
          size: "M",
          price: 499,
          quantity: 2,
          amount: 998,
        },
        {
          image: "/img/prada.jpg",
          title: "Slim-Fit Swim Short ",
          subTitle: "by Prada",
          color: "Red",
          size: "M",
          price: 200,
          quantity: 1,
          amount: 200,
        },
      ],
      mapData: {
        AU: 760,
        BR: 550,
        CA: 120,
        DE: 1300,
        FR: 540,
        GB: 690,
        GE: 200,
        IN: 200,
        RO: 600,
        RU: 300,
        US: 2920,
      },
    };
  },
};
</script>
<style>
</style>
