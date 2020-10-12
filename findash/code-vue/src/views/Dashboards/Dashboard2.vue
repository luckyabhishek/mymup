<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6">
        <b-row>
          <b-col md="6">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="top-block d-flex align-items-center justify-content-between">
                  <h5>Revenue</h5>
                  <span class="badge badge-primary">Monthly</span>
                </div>
                <h3>$<span class="counter">35000</span></h3>
                <div class="d-flex align-items-center justify-content-between mt-1">
                  <p class="mb-0">Total Revenue</p>
                  <span class="text-primary">35%</span>
                </div>
                <b-progress value="55" variant="primary" max="100" class="iq-progress-bar mt-3"></b-progress>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="top-block d-flex align-items-center justify-content-between mt-1">
                  <h5>Orders</h5>
                  <span class="badge badge-warning">Anual</span>
                </div>
                <h3><span class="counter">2500</span></h3>
                <div class="d-flex align-items-center justify-content-between mt-1">
                  <p class="mb-0">New Orders</p>
                  <span class="text-warning">24%</span>
                </div>
                <b-progress value="45" variant="warning" max="100" class="iq-progress-bar mt-3"></b-progress>
              </template>
            </iq-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="top-block d-flex align-items-center justify-content-between mt-1">
                  <h5>Leads</h5>
                  <span class="badge badge-danger">Today</span>
                </div>
                <h3>$<span class="counter">55000</span></h3>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="mb-0">New Leads</p>
                  <span class="text-danger">50%</span>
                </div>
                <b-progress value="50" variant="danger" max="100" class="iq-progress-bar mt-3"></b-progress>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="top-block d-flex align-items-center justify-content-between">
                  <h5>Lead Conversion Rate</h5>
                  <span class="badge badge-info">This Month</span>
                </div>
                <h3><span class="counter">35</span>%</h3>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="mb-0">This Month</p>
                  <span class="text-info">5%</span>
                </div>
                <b-progress value="25" variant="info" max="100" class="iq-progress-bar mt-3"></b-progress>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="6">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:body>
            <b-row>
              <b-col sm="6">
                <h6>1 United States Dollar Equals</h6>
                <h2>76.50 Indian <br> Rupee</h2>
                <p>24 Apr 6.00 am UTC Declarection</p>
                <b-form>
                  <b-row>
                    <b-col sm="6  mb-3">
                      <b-form-input type="text" value="1"></b-form-input>
                    </b-col>
                    <b-col sm="6 pl-sm-0 mb-3">
                      <b-form-select plain v-model="selected" :options="options1" id="exampleFormControlSelect1">
                      </b-form-select>
                    </b-col>
                    <b-col sm="6  mb-3">
                      <b-form-input type="text" value="76.50"></b-form-input>
                    </b-col>
                    <b-col sm="6 pl-sm-0 mb-3">
                      <b-form-select plain v-model="selected1" :options="options2" id="exampleFormControlSelect2">
                      </b-form-select>
                    </b-col>
                  </b-row>
                </b-form>
              </b-col>
              <b-col sm="6 pl-sm-0 mt-5">
                <AmChart element="iq-chart-top" type="dashboard2-chartTop" :height="245" />
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title"> Orders </h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-2-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <AmChart element="home-chart-06" type="dashboard2-realtime" :height="350" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height banner-image-block-bg position-relative" :style="'background: transparent url('+bgImageURL+') no-repeat scroll center bottom; background-size: contain; height: 440px; box-shadow: none;'">
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3" md="6" v-for="(list,index) in social" :key="index">
        <iq-card class-name="iq-card-block iq-card-stretch" :body-class="'p-0'">
          <template v-slot:body>
            <div class="social-media-block d-flex w-100">
              <div :class="'iq-card-icon '+ list.bgColor +' mr-3'"> <i :class="list.iconClass"></i></div>
                <div class="data-block d-flex align-items-center justify-content-between">
                <h2 class="line-height">{{ list.count }}</h2>
                <p class="mb-0 line-height pr-3">{{ list.text }}</p>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard1.monthlyInvoice') }}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <ul class="suggestions-lists m-0 p-0">
              <li v-for="(invoice,index) in monthlyInvocie" :key="index" class="d-flex mb-4 align-items-center">
                <div :class="'profile-icon iq-bg-' + invoice.color" ><span><i class="ri-check-fill"></i></span></div>
                <div class="media-support-info ml-3">
                  <h6>{{ invoice.title }}</h6>
                  <p class="mb-0"><span :class="'text-' + invoice.color">{{ invoice.paid_month }} paid</span> month out of {{ invoice.total_month }}</p>
                </div>
                <div class="media-support-amount ml-3">
                  <h6><span :class="'text-' + invoice.color">$</span><b> {{ invoice.amount }}</b></h6>
                  <p class="mb-0">per month</p>
                </div>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col md="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard1.efficiency')}}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <AmChart element="home-chart-03" type="dashboard2-dark-efficiencyChart" style="height: 300px;" v-if="$route.meta.dark"/>
            <AmChart element="home-chart-03" type="dashboard2-efficiencyChart" style="height: 300px;" v-else/>
          </template>
        </iq-card>
      </b-col>
      <b-col md="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard1.paymentHistory') }}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <ul class="suggestions-lists m-0 p-0">
              <div v-for="( payment,index ) in paymentHistory" :key="index">
                <li :class="'d-flex '+payment.mb4+' align-items-center'">
                  <div :class="'profile-icon bg-' + payment.color"><span><i :class="payment.icon"></i></span></div>
                  <div class="media-support-info ml-3">
                      <h6>{{ payment.title }}</h6>
                      <p class="mb-0">{{ payment.date }}</p>
                  </div>
                  <div class="media-support-amount ml-3">
                      <h6 :class="'text-' + payment.color">{{ payment.amount }}</h6>
                      <p class="mb-0">{{ payment.currency }}</p>
                  </div>
                </li>
              </div>
            </ul>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title"> Marketing Budget </h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table responsive :borderless="borderless" :items="marketingItems" :fields="marketingFields">
              <template v-slot:cell(profil)="data2">
                <b-img :src="data2.value" rounded alt="profile" class="img-fluid rounded avatar-40 text-center" />
              </template>
              <template v-slot:cell(done)="data">
                <b-badge pill v-if="data.value" variant="primary"><i class="ri-check-fill"></i></b-badge>
                <b-badge pill v-else variant="danger"><i class="ri-close-fill"></i></b-badge>
              </template>
              <template v-slot:cell(attachment)="data1">
                <b-badge v-if="data1.value" variant="success">Pdf</b-badge>
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
import AmChart from '../../components/findash/charts/AmChart'
import { Arabic } from 'flatpickr/dist/l10n/ar'
import { english } from 'flatpickr/dist/l10n/default'
import { mapGetters } from 'vuex'
import bgImage from '../../assets/images/page-img/44.png'
export default {
  name: 'Dashboard2',
  components: { AmChart },
  mounted () {
    findash.index()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  watch: {
  },
  methods: {
  },
  data () {
    return {
      selected: 'united_state',
      selected1: 'indian_rupee',
      options1: [
        { value: 'united_state', text: 'United State' },
        { value: 'option-1', text: 'Option 1' },
        { value: 'option-2', text: 'Option 2' },
        { value: 'option-3', text: 'Option 3' },
        { value: 'option-4', text: 'Option 4' },
        { value: 'option-5', text: 'Option 5' }
      ],
      options2: [
        { value: 'indian_rupee', text: 'Indian Rupee' },
        { value: 'option-1', text: 'Option 1' },
        { value: 'option-2', text: 'Option 2' },
        { value: 'option-3', text: 'Option 3' },
        { value: 'option-4', text: 'Option 4' },
        { value: 'option-5', text: 'Option 5' },
        { 'date': '2012-08-01', 'value': 13 },
        { 'date': '2012-08-02', 'value': 22 },
        { 'date': '2012-08-03', 'value': 23 },
        { 'date': '2012-08-04', 'value': 20 },
        { 'date': '2012-08-05', 'value': 17 },
        { 'date': '2012-08-06', 'value': 16 },
        { 'date': '2012-08-07', 'value': 18 },
        { 'date': '2012-08-08', 'value': 21 },
        { 'date': '2012-08-09', 'value': 26 },
        { 'date': '2012-08-10', 'value': 24 },
        { 'date': '2012-08-11', 'value': 29 },
        { 'date': '2012-08-12', 'value': 32 },
        { 'date': '2012-08-13', 'value': 18 },
        { 'date': '2012-08-14', 'value': 24 },
        { 'date': '2012-08-15', 'value': 22 },
        { 'date': '2012-08-16', 'value': 18 },
        { 'date': '2012-08-17', 'value': 19 },
        { 'date': '2012-08-18', 'value': 14 },
        { 'date': '2012-08-19', 'value': 15 },
        { 'date': '2012-08-20', 'value': 12 },
        { 'date': '2012-08-21', 'value': 8 },
        { 'date': '2012-08-22', 'value': 9 },
        { 'date': '2012-08-23', 'value': 8 },
        { 'date': '2012-08-24', 'value': 7 },
        { 'date': '2012-08-25', 'value': 5 },
        { 'date': '2012-08-26', 'value': 11 },
        { 'date': '2012-08-27', 'value': 13 },
        { 'date': '2012-08-28', 'value': 18 },
        { 'date': '2012-08-29', 'value': 20 },
        { 'date': '2012-08-30', 'value': 29 },
        { 'date': '2012-08-31', 'value': 33 },
        { 'date': '2012-09-01', 'value': 42 },
        { 'date': '2012-09-02', 'value': 35 },
        { 'date': '2012-09-03', 'value': 31 },
        { 'date': '2012-09-04', 'value': 47 },
        { 'date': '2012-09-05', 'value': 52 },
        { 'date': '2012-09-06', 'value': 46 },
        { 'date': '2012-09-07', 'value': 41 },
        { 'date': '2012-09-08', 'value': 43 },
        { 'date': '2012-09-09', 'value': 40 },
        { 'date': '2012-09-10', 'value': 39 },
        { 'date': '2012-09-11', 'value': 34 },
        { 'date': '2012-09-12', 'value': 29 },
        { 'date': '2012-09-13', 'value': 34 },
        { 'date': '2012-09-14', 'value': 37 },
        { 'date': '2012-09-15', 'value': 42 },
        { 'date': '2012-09-16', 'value': 49 },
        { 'date': '2012-09-17', 'value': 46 },
        { 'date': '2012-09-18', 'value': 47 },
        { 'date': '2012-09-19', 'value': 55 },
        { 'date': '2012-09-20', 'value': 59 },
        { 'date': '2012-09-21', 'value': 58 },
        { 'date': '2012-09-22', 'value': 57 },
        { 'date': '2012-09-23', 'value': 61 },
        { 'date': '2012-09-24', 'value': 59 },
        { 'date': '2012-09-25', 'value': 67 },
        { 'date': '2012-09-26', 'value': 65 },
        { 'date': '2012-09-27', 'value': 61 },
        { 'date': '2012-09-28', 'value': 66 },
        { 'date': '2012-09-29', 'value': 69 },
        { 'date': '2012-09-30', 'value': 71 },
        { 'date': '2012-10-01', 'value': 67 },
        { 'date': '2012-10-02', 'value': 63 },
        { 'date': '2012-10-03', 'value': 46 },
        { 'date': '2012-10-04', 'value': 32 },
        { 'date': '2012-10-05', 'value': 21 },
        { 'date': '2012-10-06', 'value': 18 },
        { 'date': '2012-10-07', 'value': 21 },
        { 'date': '2012-10-08', 'value': 28 },
        { 'date': '2012-10-09', 'value': 27 },
        { 'date': '2012-10-10', 'value': 36 },
        { 'date': '2012-10-11', 'value': 33 },
        { 'date': '2012-10-12', 'value': 31 },
        { 'date': '2012-10-13', 'value': 30 },
        { 'date': '2012-10-14', 'value': 34 },
        { 'date': '2012-10-15', 'value': 38 },
        { 'date': '2012-10-16', 'value': 37 },
        { 'date': '2012-10-17', 'value': 44 },
        { 'date': '2012-10-18', 'value': 49 },
        { 'date': '2012-10-19', 'value': 53 },
        { 'date': '2012-10-20', 'value': 57 },
        { 'date': '2012-10-21', 'value': 60 },
        { 'date': '2012-10-22', 'value': 61 },
        { 'date': '2012-10-23', 'value': 69 },
        { 'date': '2012-10-24', 'value': 67 },
        { 'date': '2012-10-25', 'value': 72 },
        { 'date': '2012-10-26', 'value': 77 },
        { 'date': '2012-10-27', 'value': 75 },
        { 'date': '2012-10-28', 'value': 70 },
        { 'date': '2012-10-29', 'value': 72 },
        { 'date': '2012-10-30', 'value': 70 },
        { 'date': '2012-10-31', 'value': 72 },
        { 'date': '2012-11-01', 'value': 73 },
        { 'date': '2012-11-02', 'value': 67 },
        { 'date': '2012-11-03', 'value': 68 },
        { 'date': '2012-11-04', 'value': 65 },
        { 'date': '2012-11-05', 'value': 71 },
        { 'date': '2012-11-06', 'value': 75 },
        { 'date': '2012-11-07', 'value': 74 },
        { 'date': '2012-11-08', 'value': 71 }
      ],
      config: {
        dateFormat: 'Y-m-d',
        inline: true,
        locale: english
      },
      arConfig: {
        dateFormat: 'Y-m-d',
        inline: true,
        locale: Arabic
      },
      chart1: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
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
        series: [{
          name: 'series1',
          data: [60, 15, 50, 30, 70]
        }],
        colors: ['#0084ff'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
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
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
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
        series: [{
          name: 'series1',
          data: [70, 40, 60, 30, 60]
        }],
        colors: ['#ffd400'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
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
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
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
        series: [{
          name: 'series1',
          data: [75, 30, 60, 35, 60]
        }],
        colors: ['#e64141'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
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
          height: 200,
          type: 'line',
          sparkline: {
            enabled: true
          },
          stacked: false
        },
        stroke: {
          width: [2, 3],
          curve: 'smooth',
          dashArray: [0, 5]
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        colors: ['#00ca00', '#007bff'],
        series: [{
          name: 'Vine',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'Dribbble',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        fill: {
          opacity: [0.2, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' views'
              }
              return y
            }
          }
        },
        legend: {
          labels: {
            useSeriesColors: true
          },
          markers: {
            customHTML: [
              function () {
                return ''
              },
              function () {
                return ''
              },
              function () {
                return ''
              }
            ]
          }
        }
      },
      chart6: {
        chart: {
          height: 400,
          type: 'bar',
          sparkline: {
            show: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#0084ff', '#ffd400'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 5,
          colors: ['#ffffff']
        },
        series: [{
          name: 'Mobile',
          enabled: 'true',
          data: [44, 90, 90, 60, 115]
        }, {
          name: 'Desktop',
          data: [35, 80, 100, 70, 95]
        }],
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
      chart7: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
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
        series: [{
          data: []
        }],
        colors: ['#0084ff'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      chart8: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
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
        series: [{
          data: []
        }],
        colors: ['#00ca00'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      items: [{
        package_no: '#0879985',
        date: '26/12/2019',
        delivery: '30/12/2019',
        status: {
          name: 'Moving',
          color: 'success'
        },
        location: 'Victoria 8007 Australia',
        progress: {
          count: 90,
          color: 'success'
        }
      },
      {
        package_no: '#0879984',
        date: '23/12/2019',
        delivery: '27/12/2019',
        status: {
          name: 'Pending',
          color: 'warning text-white'
        },
        location: 'Athens 2745 Greece',
        progress: {
          count: 70,
          color: 'warning'
        }
      },
      {
        package_no: '#0879983',
        date: '18/12/2019',
        delivery: '30/12/2019',
        status: {
          name: 'Canceled',
          color: 'danger'
        },
        location: 'Victoria 8007 Australia',
        progress: {
          count: 45,
          color: 'danger'
        }
      },
      {
        package_no: '#0879982',
        date: '14/12/2019',
        delivery: '20/12/2019',
        status: {
          name: 'Working',
          color: 'info'
        },
        location: 'Delhi 0014 India',
        progress: {
          count: 90,
          color: 'info'
        }
      }
      ],
      usersList: [{
        name: 'Anna Sthesia',
        role: 'Admin',
        image: require('../../assets/images/user/user-01.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'User',
        image: require('../../assets/images/user/user-02.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'Auther',
        image: require('../../assets/images/user/user-03.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Barb Ackue',
        role: 'Editor',
        image: require('../../assets/images/user/user-04.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Greta Life',
        role: 'User',
        image: require('../../assets/images/user/user-05.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Ira Membrit',
        role: 'User',
        image: require('../../assets/images/user/user-06.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Pete Sariya',
        role: 'Editor',
        image: require('../../assets/images/user/user-07.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Anna Sthesia',
        role: 'Editor',
        image: require('../../assets/images/user/user-08.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'Author',
        image: require('../../assets/images/user/user-09.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'User',
        image: require('../../assets/images/user/user10.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Anna Sthesia',
        role: 'Admin',
        image: require('../../assets/images/user/user-01.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'User',
        image: require('../../assets/images/user/user-02.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'Auther',
        image: require('../../assets/images/user/user-03.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Barb Ackue',
        role: 'Editor',
        image: require('../../assets/images/user/user-04.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Greta Life',
        role: 'User',
        image: require('../../assets/images/user/user-05.jpg'),
        link: '',
        isActive: true
      }
      ],
      timelineItems: [{
        color: 'primary',
        title: 'Client Login',
        right: '24 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'success',
        title: 'Scheduled Maintenance',
        right: '23 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'danger',
        title: 'Dev Meetup',
        right: '20 November 2019',
        description: 'Bonbon macaroon jelly <a href="">beans gummi</a> bears jelly lollipop apple',
        child: {
          type: 'img',
          items: [
            require('../../assets/images/user/user-05.jpg'),
            require('../../assets/images/user/user-06.jpg'),
            require('../../assets/images/user/user-07.jpg'),
            require('../../assets/images/user/user-08.jpg'),
            require('../../assets/images/user/user-09.jpg'),
            require('../../assets/images/user/user10.jpg')
          ]
        }
      },
      {
        color: 'primary',
        title: 'Client Call',
        right: '19 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'warning',
        title: 'Mega Event',
        right: '15 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      }
      ],
      averageList: [
        {
          title: 'AVG Impressions',
          icons: { icon: 'ri-arrow-down-line', color: 'danger' },
          number: '2.648',
          percentage: '26.84'
        },
        {
          title: 'AVG Engagements Rate',
          icons: { icon: 'ri-arrow-up-line', color: 'info' },
          number: '89.6',
          percentage: '8.64'
        },
        {
          title: 'AVG Reach',
          icons: { icon: 'ri-arrow-up-line', color: 'success' },
          number: '826',
          percentage: '0.64'
        },
        {
          title: 'AVG Transport',
          icons: { icon: 'ri-arrow-up-line', color: 'primary' },
          number: '7.55',
          percentage: '25.5'
        }
      ],
      social: [
        { title: 'facebook', count: '650', text: 'followers', bgColor: 'bg-primary', iconClass: 'ri-facebook-fill' },
        { title: 'googlePlus', count: '480', text: 'followers', bgColor: 'bg-warning', iconClass: 'ri-google-fill' },
        { title: 'twitter', count: '320', text: 'followers', bgColor: 'bg-info', iconClass: 'ri-twitter-fill' },
        { title: 'youtube', count: '650', text: 'followers', bgColor: 'bg-danger', iconClass: 'ri-youtube-fill' }
      ],
      monthlyInvocie: [
        { title: 'Camelun ios', color: 'primary', amount: '12,434.00', paid_month: '17', total_month: '23' },
        { title: 'React', color: 'warning', amount: '12,434.00', paid_month: '17', total_month: '23' },
        { title: 'Camelun ios', color: 'primary', amount: '12,434.00', paid_month: '17', total_month: '23' },
        { title: 'Camelun ios', color: 'danger', amount: '12,434.00', paid_month: '17', total_month: '23' }
      ],
      paymentHistory: [
        { title: 'Deposit from ATL', amount: '- 1,470', icon: 'ri-refresh-line', color: 'secondary', date: '5 march, 18:33', currency: 'USD', mb4: 'mb-4' },
        { title: 'Deposit PayPal', amount: '+ 2,220', icon: 'ri-paypal-line', color: 'primary', date: '5 march, 18:33', currency: 'USD', mb4: 'mb-4' },
        { title: 'Deposit from ATL', amount: '+ 250', icon: 'ri-check-line', color: 'primary', date: '5 march, 18:33', currency: 'USD', mb4: 'mb-4' },
        { title: 'Cancelled', amount: '0', icon: 'ri-close-line', color: 'info', date: '5 march, 18:33', currency: 'USD', mb4: 'mb-4' },
        { title: 'Deposit from ATL', amount: '- 1,470', icon: 'ri-refresh-line', color: 'secondary', date: '5 march, 18:33', currency: 'USD', mb4: '' }
      ],
      marketingFields: ['profil', 'activityType', 'owner', 'task', 'budget', 'priority', 'period', 'done', 'deadline', 'attachment'],
      marketingItems: [{
        profil: require('../../assets/images/user/01.jpg'),
        activityType: 'Product',
        owner: 'Anna Sthesia',
        task: 'Client beta test',
        budget: '$1000.00',
        priority: 'High',
        period: 'March',
        done: true,
        deadline: '28/03/2020',
        attachment: true
      },
      {
        profil: require('../../assets/images/user/02.jpg'),
        activityType: 'Branding',
        owner: 'Anna Mull',
        task: 'Corporate Presentation',
        budget: '$600.00',
        priority: 'Medium',
        period: 'March',
        done: false,
        deadline: '28/03/2020',
        attachment: true
      },
      {
        profil: require('../../assets/images/user/03.jpg'),
        activityType: 'Branding',
        owner: 'Anna Mull',
        task: 'Graphic identity',
        budget: '$2000.00',
        priority: 'Low',
        period: 'Aprial',
        done: false,
        deadline: '28/03/2020',
        attachment: false
      },
      {
        profil: require('../../assets/images/user/04.jpg'),
        activityType: 'Content',
        owner: 'Bob Frapples',
        task: 'Release Demo',
        budget: '$1200.00',
        priority: 'High',
        period: 'March',
        done: true,
        deadline: '28/03/2020',
        attachment: true
      },
      {
        profil: require('../../assets/images/user/05.jpg'),
        activityType: 'Content',
        owner: 'Bob Frapples',
        task: 'Product Information',
        budget: '$0.00',
        priority: 'Low',
        period: 'March',
        done: true,
        deadline: '28/03/2020',
        attachment: true
      }
      ],
      borderless: true,
      bgImageURL: bgImage
    }
  }
}
</script>
