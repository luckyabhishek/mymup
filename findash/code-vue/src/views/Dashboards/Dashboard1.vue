<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-primary">
              <i class="ri-focus-2-line"></i>
            </div>
            <p class="text-secondary">Total Sales</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <b>$18 378</b>
              </h4>
              <ApexChart element="iq-chart-box1" :chartOption="chartBox1" />
              <span class="text-primary">
                <b>
                  +14%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-danger">
              <i class="ri-pantone-line"></i>
            </div>
            <p class="text-secondary">Sales Today</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <b>$190</b>
              </h4>
              <ApexChart element="iq-chart-box2" :chartOption="chartBox2" />
              <span class="text-danger">
                <b>
                  -6%
                  <i class="ri-arrow-down-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-success">
              <i class="ri-database-2-line"></i>
            </div>
            <p class="text-secondary">Total Classon</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <b>45</b>
              </h4>
              <ApexChart element="iq-chart-box3" :chartOption="chartBox3" />
              <span class="text-success">
                <b>
                  +0.36%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-warning">
              <i class="ri-pie-chart-2-line"></i>
            </div>
            <p class="text-secondary">Total Profit</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <b>60</b>
              </h4>
              <ApexChart element="iq-chart-box4" :chartOption="chartBox4" />
              <span class="text-warning">
                <b>
                  +0.45%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="row m-0 align-items-center pb-0"
        >
          <template v-slot:headerTitle>
            <h4 class="card-title">Spendings Stats</h4>
          </template>
          <template v-slot:headerAction>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href="#" class="nav-link active">Personal</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Business</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Credit</a>
              </li>
            </ul>
          </template>
          <template v-slot:body>
            <b-col md="8">
              <ApexChart element="iq-income-chart" :chartOption="incomeChart" />
            </b-col>
            <b-col md="4">
              <div id="chart-data-block">
                <h4>
                  <b>Total</b>
                </h4>
                <h2>
                  <b>$ 49000</b>
                </h2>
                <p>Income Top the Last Week</p>
              </div>
              <div class="chart-box d-flex align-items-center justify-content-between mt-5 mb-5">
                <ApexChart element="iq-chart-boxleft" :chartOption="boxleftChart" />
                <ApexChart element="iq-chart-boxright" :chartOption="boxrightChart" />
              </div>
              <div class="mt-3 pr-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <span class="bg-primary p-1 rounded mr-2"></span>
                    <p class="mb-0">Successful Deals</p>
                  </div>
                  <h6>
                    <b>78 %</b>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <span class="bg-danger p-1 rounded mr-2"></span>
                    <p class="mb-0">Failed Deals</p>
                  </div>
                  <h6>
                    <b>12 %</b>
                  </h6>
                </div>
              </div>
            </b-col>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height banner-image-block-bg position-relative"
          :style="'background: transparent url('+bgImageURL+') no-repeat scroll center bottom; background-size: contain; height: 440px; box-shadow: none;'"
        ></iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Open Invoices</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary">
                  <i class="ri-more-fill"></i>
                </span>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>View
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>Delete
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>Edit
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>Print
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>Download
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table responsive :items="items" class="mb-0" thead-class="thead-light">
              <template v-slot:cell(status)="data">
                <b-badge pill :variant="data.value.color">{{ data.value.name }}</b-badge>
              </template>
              <template v-slot:cell(amount)="data1">${{ data1.value }}</template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:body>
            <div v-for="(list,index) in expenses" :key="index">
              <div class="d-flex align-items-center" :class="{ 'mb-3': index === 0 }">
                <div :class="'icon iq-icon-box rounded mr-3 iq-bg-' + list.color">
                  <i :class="list.icon"></i>
                </div>
                <div class="iq-details col-sm-9 p-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="title text-dark">{{ list.title }}</span>
                    <div class="percentage">
                      <b>
                        <span>$</span>
                        {{list.amount }}
                      </b>
                    </div>
                  </div>
                  <div class="iq-progress-bar-linear d-inline-block w-100">
                    <b-progress
                      :value="list.percentage"
                      :variant="list.color"
                      max="100"
                      class="iq-progress-bar"
                    ></b-progress>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span class>{{ list.transaction_count }} Transaction</span>
                    <div class="percentage">
                      {{ list.percentage }}
                      <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr v-if="index != list.length-1" class="mt-4 mb-4" />
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">User Percentage</h4>
          </template>
          <template v-slot:body>
            <MorrisChart
              :element="homeChart.type"
              :type="homeChart.type"
              :data="homeChart.bodyData"
              :colors="homeChart.colors"
              :labels="homeChart.labels"
            />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Users</h4>
          </template>
          <template v-slot:body>
            <ul class="perfomer-lists m-0 p-0">
              <li v-for="(list,index) in users" :key="index" class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid">
                  <img :src="list.image" alt="story-img" class="rounded avatar-40" />
                </div>
                <div class="media-support-info ml-3">
                  <h6>{{ list.title }}</h6>
                  <p class="mb-0 font-size-12">{{ list.subtitle }}</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <span class="text-primary">
                    <b>${{ list.total }}</b>
                  </span>
                </div>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch">
          <template v-slot:body>
            <h6>Graph Profit Margin</h6>
            <h2>80%</h2>
          </template>
          <ApexChart element="home-profit-chart" :chartOption="homeProfitChart" />
        </iq-card>
        <iq-card class-name="iq-card-block iq-card-stretch">
          <template v-slot:body>
            <h6>Graph Loss Margin</h6>
            <h2>25%</h2>
          </template>
          <ApexChart element="home-loss-chart" :chartOption="homeLossChart" />
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
import bgImage from '../../assets/images/page-img/45.png'
// import MorrisChart from '../../components/findash/charts/MorrisChart'
export default {
  name: 'Dashboard1',
  // components: { MorrisChart },
  mounted () {
    findash.index()
  },
  data () {
    return {
      items: [
        {
          customer: 'Ira Membrit',
          date: '18/10/2019',
          invoice: '20156',
          amount: '1500',
          status: { name: 'paid', color: 'success' },
          action: 'Copy'
        },
        {
          customer: 'Pete Sariya',
          date: '26/10/2019',
          invoice: '7859',
          amount: '2000',
          status: { name: 'paid', color: 'success' },
          action: 'Send email'
        },
        {
          customer: 'Cliff Hanger',
          date: '18/11/2019',
          invoice: '6396',
          amount: '2500',
          status: { name: 'past due', color: 'danger' },
          action: 'Before Date'
        },
        {
          customer: 'Terry Aki',
          date: '14/12/2019',
          invoice: '7854',
          amount: '5000',
          status: { name: 'paid', color: 'success' },
          action: 'Copy'
        },
        {
          customer: 'Anna Mull',
          date: '24/12/2019',
          invoice: '568569',
          amount: '10000',
          status: { name: 'paid', color: 'success' },
          action: 'Send email'
        },
        {
          customer: 'Alex john',
          date: '05/12/2019',
          invoice: '45896',
          amount: '15236',
          status: { name: 'paid', color: 'success' },
          action: 'Send email'
        },
        {
          customer: 'Rock lai',
          date: '28/12/2019',
          invoice: '458965',
          amount: '50200',
          status: { name: 'Past Due', color: 'danger' },
          action: 'Before Due'
        },
        {
          customer: 'Cliff Hanger',
          date: '18/11/2019',
          invoice: '7854',
          amount: '5000',
          status: { name: 'paid', color: 'success' },
          action: 'Copy'
        },
        {
          customer: 'Terry Aki',
          date: '14/12/2019',
          invoice: '7854',
          amount: '5000',
          status: { name: 'paid', color: 'success' },
          action: 'Copy'
        },
        {
          customer: 'Anna Mull',
          date: '24/12/2019',
          invoice: '568569',
          amount: '10000',
          status: { name: 'paid', color: 'success' },
          action: 'Send email'
        }
      ],
      expenses: [
        {
          title: 'Dailly expenses',
          color: 'danger',
          icon: 'ri-shopping-bag-line',
          amount: '620',
          transaction_count: '45',
          percentage: '67'
        },
        {
          title: 'House, bills',
          color: 'warning',
          icon: 'ri-home-8-line',
          amount: '230',
          transaction_count: '17',
          percentage: '32'
        },
        {
          title: 'Children',
          color: 'success',
          icon: 'ri-camera-lens-line',
          amount: '120',
          transaction_count: '9',
          percentage: '20'
        },
        {
          title: 'Health',
          color: 'primary',
          icon: 'ri-hospital-line',
          amount: '80',
          transaction_count: '18',
          percentage: '30'
        },
        {
          title: 'Banking',
          color: 'info',
          icon: 'ri-bank-line',
          amount: '110',
          transaction_count: '50',
          percentage: '60'
        }
      ],
      users: [
        {
          title: 'Dribble',
          subtitle: 'Graphics Designer',
          image: require('../../assets/images/page-img/29.png'),
          total: '10.00'
        },
        {
          title: 'Behance',
          subtitle: 'Developer',
          image: require('../../assets/images/page-img/30.png'),
          total: '15.00'
        },
        {
          title: 'Instagram',
          subtitle: 'Posts',
          image: require('../../assets/images/page-img/31.png'),
          total: '25.00'
        },
        {
          title: 'Twitter',
          subtitle: 'Latest News',
          image: require('../../assets/images/page-img/32.png'),
          total: '5.00'
        },
        {
          title: 'Bootstrap',
          subtitle: 'Ui/Ux Design',
          image: require('../../assets/images/page-img/33.png'),
          total: '5.00'
        }
      ],
      chartBox1: {
        series: [
          {
            name: 'Total sales',
            data: [10, 10, 35, 10]
          }
        ],
        colors: ['#1e3d73'],
        chart: {
          height: 50,
          width: 100,
          type: 'line',
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar']
        }
      },
      chartBox2: {
        series: [
          {
            name: 'Sale Today',
            data: [10, 10, 35, 10]
          }
        ],
        colors: ['#fe517e'],
        chart: {
          height: 50,
          width: 100,
          type: 'line',
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar']
        }
      },
      chartBox3: {
        series: [
          {
            name: 'Total Classon',
            data: [10, 10, 35, 10]
          }
        ],
        colors: ['#99f6ca'],
        chart: {
          height: 50,
          width: 100,
          type: 'line',
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar']
        }
      },
      chartBox4: {
        series: [
          {
            name: 'Total Profit',
            data: [10, 10, 35, 10]
          }
        ],
        colors: ['#ffbf43'],
        chart: {
          height: 50,
          width: 100,
          type: 'line',
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar']
        }
      },
      incomeChart: {
        series: [
          {
            name: 'Successful deals',
            data: [30, 50, 35, 60, 40, 60, 60]
          },
          {
            name: 'Failed deals',
            data: [40, 50, 55, 50, 30, 80, 30]
          }
        ],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true
        },
        colors: ['#1e3d73', '#fe517e'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '15%',
            endingShape: 'rounded'
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
        },
        yaxis: {
          title: {
            text: ''
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      homeProfitChart: {
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ],
        colors: ['#1e3d73', '#99f6ca'],
        chart: {
          height: 100,
          type: 'area',
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      homeLossChart: {
        series: [
          {
            name: 'series1',
            data: [80, 90, 110, 60, 42, 109, 100]
          },
          {
            name: 'series2',
            data: [50, 60, 70, 30, 20, 85, 80]
          }
        ],
        colors: ['#1e3d73', '#99f6ca'],
        chart: {
          height: 100,
          type: 'area',
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      boxleftChart: {
        series: [
          {
            name: 'Success',
            data: [10, 10, 35, 10]
          }
        ],
        colors: ['#1e3d73'],
        chart: {
          height: 50,
          width: 100,
          type: 'line',
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar']
        }
      },
      boxrightChart: {
        series: [
          {
            name: 'Failed',
            data: [10, 10, 35]
          }
        ],
        colors: ['#fe517e'],
        chart: {
          height: 50,
          width: 100,
          type: 'line',
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar']
        }
      },
      homeChart: {
        type: 'donut',
        colors: ['#1e3d73', '#fe517e', '#99f6ca'],
        bodyData: [
          { label: 'Download Sales', value: 12 },
          { label: 'In-Store Sales', value: 30 },
          { label: 'Mail-Order Sales', value: 20 }
        ],
        labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
        hideHover: 'auto'
      },
      bgImageURL: bgImage
    }
  }
}
</script>

<style>
.iq-card-body {
  flex: unset;
}
</style>
