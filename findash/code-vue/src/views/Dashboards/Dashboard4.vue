<template>
  <b-container fluid>
    <b-row>
      <b-col lg="8">
        <iq-card :class-name="'iq-card-block iq-card-stretch'">
          <template v-slot:headerTitle>
            <div class="iq-header-title">
              <h4 class="card-title">Monthly sales trend</h4>
            </div>
          </template>
          <template v-slot:headerAction>
            <div class="custom-control custom-switch custom-switch-text custom-control-inline">
              <div class="custom-switch-inner">
                <input type="checkbox" class="custom-control-input" id="switch-title" checked />
                <label
                  class="custom-control-label"
                  for="switch-title"
                  data-on-label="On"
                  data-off-label="Off"
                ></label>
              </div>
            </div>
          </template>
          <template v-slot:body :body-class="'rounded'">
            <div class="d-flex justify-content-around">
              <div class="price-week-box mr-5">
                <span>This Week</span>
                <h3>
                  $
                  <span class="counter">35000</span>
                  <i class="ri-funds-line text-success font-size-18"></i>
                </h3>
              </div>
              <div class="price-week-box">
                <span>Last Week</span>
                <h3>
                  $
                  <span class="counter">30000</span>
                  <i class="ri-funds-line text-danger font-size-18"></i>
                </h3>
              </div>
            </div>
            <ApexChart element="menu-chart-01" :chartOption="chart1" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4" class="d-flex flex-wrap p-0">
        <b-col md="6" v-for="(item,index) in cardData1" :key="index">
          <iq-card :class-name="'iq-card-block iq-card-stretch iq-card-height rounded'">
            <template v-slot:body>
              <div class="row">
                <div class="col-lg-12 mb-2 d-flex justify-content-between">
                  <div
                    :class="'icon iq-icon-box rounded '+ item.bgColor +' rounded shadow'"
                    data-wow-delay="0.2s"
                  >
                    <i :class="item.iClass"></i>
                  </div>
                </div>
                <div class="col-lg-12 mt-3">
                  <h6 class="card-title text-uppercase text-secondary mb-0">{{ item.cardTitle }}</h6>
                  <span
                    v-if="item.counterStatus"
                    class="h2 text-dark mb-0 counter d-inline-block w-100"
                  >{{ item.counter }}</span>
                  <span v-else class="h2 text-dark mb-0 d-inline-block w-100">
                    <span class="counter">{{ item.counter }}</span>%
                  </span>
                </div>
              </div>
              <p class="mb-0 text-muted mt-3">
                <!-- <span class="badge badge-primary mr-2"><i class="ri-arrow-up-fill"></i> 3.48%</span> -->
                <b-badge pill :variant="item.badge">
                  <i class="ri-arrow-up-fill"></i>
                  {{ item.percentage }}
                </b-badge>
              </p>
            </template>
          </iq-card>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4" v-for="(item,index) in cardData2" :key="index">
        <iq-card class="iq-card-block iq-card-stretch">
          <template v-slot:body>
            <h6>{{ item.title }}</h6>
            <h3>{{ item.counter }}</h3>
            <p>{{ item.description }}</p>
          </template>
          <ApexChart
            v-if="item.chartName == 'chart2'"
            element="menu-chart-02"
            :chartOption="chart2"
          />
          <ApexChart
            v-else-if="item.chartName == 'chart3'"
            element="menu-chart-03"
            :chartOption="chart3"
          />
          <ApexChart v-else element="menu-chart-04" :chartOption="chart4" />
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <b-row>
          <b-col md="5">
            <iq-card class="iq-card-block iq-card-stretch">
              <template v-slot:body>
                <h2 class="mb-0">
                  <span>$</span>
                  <span class="counter">3450</span>
                </h2>
                <p class="mb-0">Your Current Balance</p>
                <h6 class="mb-4">
                  <span class="text-success">20%</span> ($520)
                </h6>
                <a href="#" class="btn btn-danger d-block mt-5 mb-5 text-white">Add Credit</a>
                <hr />
                <div class="d-flex align-items-center justify-content-between">
                  <b-col sm="6">
                    <span class="title">Sales: 75%</span>
                    <b-progress value="75" variant="primary" max="100" class="iq-progress-bar mt-3"></b-progress>
                  </b-col>
                  <b-col sm="6">
                    <span class="title">Referal: 25%</span>
                    <b-progress value="25" variant="warning" max="100" class="iq-progress-bar mt-3"></b-progress>
                  </b-col>
                </div>
              </template>
            </iq-card>
            <iq-card class="iq-card-block iq-card-stretch">
              <template v-slot:body body-class="mb-4">
                <h2 class="d-inline-block">75%</h2>
                <span class="d-inline-block ml-2">5% up</span>
                <p>From the Last Month</p>
              </template>
              <!-- <div id="chart-8" class="pt-5"></div> -->
              <ApexChart element="menu-chart-05" :class="'pt-5'" :is-live="true" :chartOption="chart5" />
            </iq-card>
          </b-col>
          <b-col md="7">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Total Sales Unit</h4>
              </template>
              <template v-slot:headerAction>
                <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                  <template v-slot:button-content>
                    <i class="ri-more-fill"></i>
                  </template>
                  <b-dropdown-item>
                    <i class="ri-eye-fill mr-2"></i>
                    {{ $t('dropdown.view') }}
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <i class="ri-delete-bin-6-fill mr-2"></i>
                    {{ $t('dropdown.delete') }}
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <i class="ri-pencil-fill mr-2"></i>
                    {{ $t('dropdown.edit') }}
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <i class="ri-printer-fill mr-2"></i>
                    {{ $t('dropdown.print') }}
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <i class="ri-file-download-fill mr-2"></i>
                    {{ $t('dropdown.download') }}
                  </b-dropdown-item>
                </b-dropdown>
              </template>
              <template v-slot:body>
                <b-progress :max="100">
                  <b-progress-bar
                    v-for="(item,index) in totalSalesUnit"
                    :key="index"
                    :variant="item.bgColor"
                    role="progressbar"
                    :value="item.width"
                    :aria-valuenow="item.ariaValueNow"
                  ></b-progress-bar>
                </b-progress>
                <ul class="d-flex align-items-center justify-content-between list-inline mt-2 p-0">
                  <li v-for="(item,index) in totalSalesList" :key="index">
                    <h5>{{ item.title }}</h5>
                    <h6>{{ item.value }}</h6>
                  </li>
                </ul>
              </template>
            </iq-card>
            <iq-card class="iq-card-block iq-card-stretch">
              <template v-slot:headerTitle>
                <div class="iq-header-title">
                  <h4 class="card-title">Total Sales Unit</h4>
                </div>
              </template>
              <template>
                <HighChart :option="salesUnitChart" />
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Countries</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <i class="ri-more-2-fill"></i>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>
                {{ $t('dropdown.view') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>
                {{ $t('dropdown.delete') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>
                {{ $t('dropdown.edit') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>
                {{ $t('dropdown.print') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>
                {{ $t('dropdown.download') }}
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body body-class="mb-1">
            <div v-for="(item,index) in countriesList" :key="index">
              <div :class="'iq-details '+item.mtClass">
                <span class="title text-dark">{{ item.title }}</span>
                <div :class="'percentage float-right '+ item.textColor">
                  {{ item.percentage }}
                  <span>%</span>
                </div>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <b-progress
                    :value="item.dataPercentage"
                    :variant="item.bgColor"
                    max="100"
                    class="iq-progress-bar"
                  ></b-progress>
                </div>
              </div>
            </div>
          </template>
          <ApexChart element="bar-chart-12" :chartOption="chart6" />
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <iq-card :class-name="'iq-card-block iq-card-stretch iq-card-height'">
          <template v-slot:headerTitle>
            <h4 class="card-title">Exclusive Datatable</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <i class="ri-more-fill"></i>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>
                {{ $t('dropdown.view') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>
                {{ $t('dropdown.delete') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>
                {{ $t('dropdown.edit') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>
                {{ $t('dropdown.print') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>
                {{ $t('dropdown.download') }}
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table
              responsive
              :borderless="borderless"
              :items="exclusiveItems"
              :fields="exclusiveFields"
            >
              <template v-slot:head(checkbox)>
                <b-form-checkbox v-model="striped"></b-form-checkbox>
              </template>
              <template v-slot:cell(checkbox)>
                <b-form-checkbox v-model="striped"></b-form-checkbox>
              </template>
              <template v-slot:cell(profile)="data3">
                <b-img
                  :src="data3.value"
                  rounded
                  alt="profile"
                  class="img-fluid rounded avatar-40 text-center"
                />
              </template>
              <template v-slot:cell(status)="data4">
                <b-badge pill :variant="data4.value.color">{{ data4.value.title }}</b-badge>
              </template>
              <template v-slot:cell(action)="data5">
                <div v-if="data5" class="flex align-items-center list-user-action">
                  <a
                    class="iq-bg-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="View"
                    href="#"
                  >
                    <i class="ri-eye-line"></i>
                  </a>
                  <a
                    class="iq-bg-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Edit"
                    href="#"
                  >
                    <i class="ri-pencil-line"></i>
                  </a>
                  <a
                    class="iq-bg-primary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Delete"
                    href="#"
                  >
                    <i class="ri-delete-bin-line"></i>
                  </a>
                </div>
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
export default {
  name: 'Dashboard4',
  mounted () {
    findash.index()
  },
  data () {
    var data = []
    let XAXISRANGE = 7776e5
    return {
      striped: true,
      chart1: {
        series: [
          {
            name: 'This Week',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'Last Week',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ],
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#1e3d73', '#fe517e'],
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
      chart2: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            name: 'series1',
            data: [60, 15, 50, 30, 70]
          }
        ],
        colors: ['var(--iq-primary)'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-08-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-10-19T02:30:00',
            '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart3: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            name: 'series1',
            data: [70, 40, 60, 30, 60]
          }
        ],
        colors: ['var(--iq-success)'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-08-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-10-19T02:30:00',
            '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart4: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            name: 'series1',
            data: [60, 40, 60, 40, 70]
          }
        ],
        colors: ['var(--iq-warning)'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-08-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-10-19T02:30:00',
            '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart5: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: !0,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1e3
            }
          },
          toolbar: {
            show: !1
          },
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            data: data
          }
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: XAXISRANGE
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: !1
        },
        colors: ['var(--iq-primary)']
      },
      chart6: {
        chart: {
          height: 150,
          type: 'bar',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          curve: 'smooth',
          width: 15
        },
        series: [
          {
            name: 'series1',
            data: [70, 40, 60, 30, 60]
          }
        ],
        colors: ['#e7ecee'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2019-08-19T00:00:00',
            '2019-09-19T00:00:00',
            '2019-10-19T00:00:00',
            '2019-11-19T00:00:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      cardData1: [
        {
          bgColor: 'bg-primary',
          iClass: 'las la-users',
          cardTitle: 'Customer',
          counter: '60,586',
          badge: 'primary',
          percentage: '3.48%',
          counterStatus: true
        },
        {
          bgColor: 'bg-warning',
          iClass: 'las la-balance-scale',
          cardTitle: 'Sales',
          counter: '80,586',
          badge: 'warning',
          percentage: '3.48%',
          counterStatus: true
        },
        {
          bgColor: 'bg-info',
          iClass: 'las la-plus-circle',
          cardTitle: 'Profit',
          counter: '80',
          badge: 'info',
          percentage: '3.48%',
          counterStatus: false
        },
        {
          bgColor: 'bg-danger',
          iClass: 'las la-minus-circle',
          cardTitle: 'Loss',
          counter: '15',
          badge: 'danger',
          percentage: '3.48%',
          counterStatus: false
        }
      ],
      cardData2: [
        {
          title: 'Total Revenue',
          counter: '15200',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          i: '2',
          chartName: 'chart2'
        },
        {
          title: 'Current Serverload',
          counter: '6300',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          i: '3',
          chartName: 'chart3'
        },
        {
          title: 'Members Online',
          counter: '3520',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          i: '4',
          chartName: 'chart4'
        }
      ],
      totalSalesUnit: [
        { bgColor: 'primary', width: '20', ariaValueNow: '15' },
        { bgColor: 'success', width: '30', ariaValueNow: '30' },
        { bgColor: 'info', width: '30', ariaValueNow: '20' },
        { bgColor: 'danger', width: '20', ariaValueNow: '20' }
      ],
      totalSalesList: [
        { title: 'Sales', value: '20%' },
        { title: 'Finance', value: '30%' },
        { title: 'Marketing', value: '30%' },
        { title: 'Manufacturing', value: '20%' }
      ],
      salesUnitChart: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        colors: ['#1e3d73', '#fe517e', '#99f6ca', '#ffbf43'],
        series: [
          {
            name: 'Brands',
            colorByPoint: true,
            data: [
              {
                name: 'Sales',
                y: 60,
                sliced: true,
                selected: true
              },
              {
                name: 'Profit',
                y: 30
              },
              {
                name: 'Growth',
                y: 10.85
              },
              {
                name: 'Loss',
                y: 20
              }
            ]
          }
        ]
      },
      countriesList: [
        {
          mtClass: 'mt-2',
          textColor: 'text-primary',
          title: 'United States',
          percentage: '95',
          bgColor: 'primary',
          dataPercentage: '95'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-warning',
          title: 'India',
          percentage: '75',
          bgColor: 'warning',
          dataPercentage: '75'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-success',
          title: 'Australia',
          percentage: '70',
          bgColor: 'success',
          dataPercentage: '70'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-danger',
          title: 'Brazil',
          percentage: '55',
          bgColor: 'danger',
          dataPercentage: '55'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-info',
          title: 'Africa',
          percentage: '45',
          bgColor: 'info',
          dataPercentage: '45'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-dark',
          title: 'Caneda',
          percentage: '25',
          bgColor: 'dark',
          dataPercentage: '25'
        }
      ],
      exclusiveFields: [
        'checkbox',
        'profile',
        'manage_by',
        'company',
        'date',
        'status',
        'action'
      ],
      exclusiveItems: [
        {
          profile: require('../../assets/images/user/01.jpg'),
          manage_by: 'Barb Ackue',
          company: 'IIFL Finance',
          date: '07 April 2020',
          status: { color: 'primary', title: 'Success' },
          action: true
        },
        {
          profile: require('../../assets/images/user/02.jpg'),
          manage_by: 'Ira Membrit',
          company: 'Shubham Housing',
          date: '10 April 2020',
          status: { color: 'success', title: 'Done' },
          action: true
        },
        {
          profile: require('../../assets/images/user/03.jpg'),
          manage_by: 'Pete Sariya',
          company: 'Achiva Nidhi Limited',
          date: '12 April 2020',
          status: { color: 'primary', title: 'Success' },
          action: true
        },
        {
          profile: require('../../assets/images/user/04.jpg'),
          manage_by: 'Anna Mull',
          company: 'Marwadi Shares',
          date: '17 April 2020',
          status: { color: 'info', title: 'Pending' },
          action: true
        },
        {
          profile: require('../../assets/images/user/05.jpg'),
          manage_by: 'Paul Molive',
          company: 'Gruh Finance Limited',
          date: '20 April 2020',
          status: { color: 'danger', title: 'Canceled' },
          action: true
        }
      ],
      borderless: true
    }
  }
}
</script>
