<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3" md="6" v-for="(list,index) in product" :key="index">
        <iq-card
          :class-name="'iq-card-block iq-card-stretch iq-card-height '+list.bgColor+' rounded'"
        >
          <template v-slot:body>
            <div class="d-flex align-items-center justify-content-between">
              <div
                :class="' icon iq-icon-box rounded iq-'+list.bgColor+' rounded shadow '"
                data-wow-delay="0.2s"
              >
                <i :class="list.iconClass"></i>
              </div>
              <div class="iq-text">
                <h6 class="text-white">{{ list.text }}</h6>
                <h3 class="text-white">{{ list.count }}</h3>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" sm="12">
        <iq-card class-name="overflow-hidden">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard3.productManagement') }}</h4>
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
          <AmChart element="home-chart-02" type="productChart" style="min-height: 350px;" />
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard3.activity') }}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary">
                  <i class="ri-more-fill"></i>
                </span>
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
            <ApexChart
              element="home-chart-03"
              :chartOption="chart1"
              style="min-height: 350px;"
            />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" class="d-flex flex-wrap p-0">
        <b-row>
          <b-col md="6" v-for="(list,index) in progress" :key="index">
            <iq-card class-name="iq-card-block iq-card-stretch">
              <template v-slot:body>
                <div class="text-center">
                  <h5>{{ list.title }}</h5>
                  <div
                    class="progress-round income-progress mx-auto mt-3"
                    :data-value="list.dataValue"
                  >
                    <span class="progress-left">
                      <span :class="'progress-bar '+list.borderColor"></span>
                    </span>
                    <span class="progress-right">
                      <span :class="'progress-bar '+list.borderColor"></span>
                    </span>
                    <div
                      class="progress-value w-100 h-100 rounded d-flex align-items-center justify-content-center text-center"
                    >
                      <div class="h4 mb-0">{{ list.progressValue }}</div>
                    </div>
                  </div>
                  <p class="mb-0 mt-3">Lorem Ipsum is simply dummy text.</p>
                </div>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle :header-class="'d-flex justify-content-between'">
            <h4 class="card-title">{{ $t('dashboard3.ticket') }}</h4>
          </template>
          <template v-slot:body>
            <ul class="tikit-lists m-0 p-0">
              <li
                v-for="(list,index) in ticketItems"
                :key="index"
                class="d-flex mb-4 align-items-center justify-content-between"
              >
                <div class="d-flex align-items-center">
                  <div class="user-img img-fluid">
                    <b-img :src="list.profil" rounded alt="story-img" class="avatar-40"></b-img>
                  </div>
                  <div class="media-support-info ml-3">
                    <h6>{{ list.title }}</h6>
                    <p class="mb-0 font-size-12">{{ list.description }}</p>
                  </div>
                </div>
                <span>{{ list.date }}</span>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard3.productEarnings') }}</h4>
          </template>
          <template v-slot:body>
            <ApexChart
              element="iq-product-activity"
              :is-live="true"
              :chartOption="chart2"
            />
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="9">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard3.productDetails') }}</h4>
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
            <b-table
              responsive
              :borderless="borderless"
              :items="productItems"
              :fields="productFields"
            >
              <template v-slot:cell(status)="data">
                <b-badge pill :variant="data.value.color">{{ data.value.text }}</b-badge>
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard3.market') }}</h4>
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
            <b-table
              responsive
              :borderless="borderless"
              :items="marketItems"
              :fields="marketFields"
            >
              <template v-slot:cell(market)="data1">
                <i :class="data1.value.class+' font-size-24 line-height'"></i>
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
import ApexChart from '../../components/findash/charts/ApexChart'
export default {
  name: 'Dashboard1',
  components: { AmChart, ApexChart },
  mounted () {
    findash.index()
  },
  data () {
    return {
      items: [
        {
          client: 'Ira Membrit',
          date: '18/10/2019',
          invoice: '20156',
          amount: '1500',
          status: { name: 'paid', color: 'success' },
          action: 'Copy'
        },
        {
          client: 'Pete Sariya',
          date: '26/10/2019',
          invoice: '7859',
          amount: '2000',
          status: { name: 'paid', color: 'success' },
          action: 'Send email'
        },
        {
          client: 'Cliff Hanger',
          date: '18/11/2019',
          invoice: '6396',
          amount: '2500',
          status: { name: 'past due', color: 'danger' },
          action: 'Before Date'
        },
        {
          client: 'Terry Aki',
          date: '14/12/2019',
          invoice: '7854',
          amount: '5000',
          status: { name: 'paid', color: 'success' },
          action: 'Copy'
        },
        {
          client: 'Anna Mull',
          date: '24/12/2019',
          invoice: '568569',
          amount: '10000',
          status: { name: 'paid', color: 'success' },
          action: 'Send email'
        }
      ],
      monthlyInvocie: [
        {
          title: 'Camelun ios',
          color: 'success',
          amount: '12,434.00',
          paid_month: '17',
          total_month: '23'
        },
        {
          title: 'React',
          color: 'warning',
          amount: '12,434.00',
          paid_month: '17',
          total_month: '23'
        },
        {
          title: 'Camelun ios',
          color: 'success',
          amount: '12,434.00',
          paid_month: '17',
          total_month: '23'
        },
        {
          title: 'Camelun ios',
          color: 'danger',
          amount: '12,434.00',
          paid_month: '17',
          total_month: '23'
        }
      ],
      paymentHistory: [
        {
          title: 'Deposit from ATL',
          amount: '- 1,470',
          icon: 'ri-refresh-line',
          color: 'secondary',
          date: '5 march, 18:33',
          currency: 'USD'
        },
        {
          title: 'Deposit PayPal',
          amount: '+ 2,220',
          icon: 'ri-paypal-line',
          color: 'primary',
          date: '5 march, 18:33',
          currency: 'USD'
        },
        {
          title: 'Deposit from ATL',
          amount: '+ 250',
          icon: 'ri-check-line',
          color: 'primary',
          date: '5 march, 18:33',
          currency: 'USD'
        },
        {
          title: 'Cancelled',
          amount: '0',
          icon: 'ri-close-line',
          color: 'info',
          date: '5 march, 18:33',
          currency: 'USD'
        },
        {
          title: 'Refund',
          amount: '- 500',
          icon: 'ri-arrow-go-back-fill',
          color: 'info',
          date: '5 march, 18:33',
          currency: 'USD'
        },
        {
          title: 'Deposit from ATL',
          amount: '- 1,470',
          icon: 'ri-refresh-line',
          color: 'secondary',
          date: '5 march, 18:33',
          currency: 'USD'
        }
      ],
      chart1: {
        series: [
          {
            name: 'Sale',
            data: [80, 50, 30, 40, 100, 20]
          },
          {
            name: 'Demand',
            data: [20, 30, 40, 80, 20, 80]
          },
          {
            name: 'Stock',
            data: [44, 76, 78, 13, 43, 10]
          }
        ],
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        colors: ['#1e3d73', '#99f6ca', '#fe517e'],
        title: {
          text: ''
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
      },
      darkChart1: {
        series: [44, 55, 13, 33],
        chart: {
          width: 380,
          height: 180,
          foreColor: '#8c91b6',
          type: 'donut'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#827af3', '#6ce6f4', '#a09e9e', '#fbc647'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }
        ],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 150
        }
      },
      chart2: {
        series: [{
          data: [ 70, 40, 60, 30, 60 ]
        } ],
        chart: {
          height: 350,
          type: 'line',
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
          zoom: {
            enabled: false
          }
        },
        colors: ['#9267ff'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Product Updating Chart',
          align: 'left'
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          categories: ['19 May', '20 May', '21 May', '22 May', '24 May']
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: false
        }
      },
      product: [
        {
          title: 'customers',
          count: '75',
          text: 'Customers',
          bgColor: 'bg-primary',
          iconClass: 'las la-users'
        },
        {
          title: 'product',
          count: '60',
          text: 'Product',
          bgColor: 'bg-warning',
          iconClass: 'lab la-product-hunt'
        },
        {
          title: 'user',
          count: '80',
          text: 'User',
          bgColor: 'bg-success',
          iconClass: 'las la-user-tie'
        },
        {
          title: 'category',
          count: '45',
          text: 'Category',
          bgColor: 'bg-danger',
          iconClass: 'lab la-buffer'
        }
      ],
      progress: [
        {
          title: 'Income Budget',
          dataValue: '80',
          progressValue: '75%',
          borderColor: 'border-primary',
          content: 'Lorem Ipsum is simply dummy text.'
        },
        {
          title: 'Stock',
          dataValue: '70',
          progressValue: '70%',
          borderColor: 'border-danger',
          content: 'Lorem Ipsum is simply dummy text.'
        },
        {
          title: 'Outcome Budget',
          dataValue: '65',
          progressValue: '65%',
          borderColor: 'border-success',
          content: 'Lorem Ipsum is simply dummy text.'
        },
        {
          title: 'Demand',
          dataValue: '30',
          progressValue: '30%',
          borderColor: 'border-warning',
          content: 'Lorem Ipsum is simply dummy text.'
        }
      ],
      ticketItems: [
        {
          profil: require('../../assets/images/user/01.jpg'),
          title: 'Paul Molive',
          description: 'Lorem Ipsum is',
          date: '05-04-2020'
        },
        {
          profil: require('../../assets/images/user/02.jpg'),
          title: 'Anna Sthesia',
          description: 'Lorem Ipsum is',
          date: '05-04-2020'
        },
        {
          profil: require('../../assets/images/user/03.jpg'),
          title: 'Paige Turner',
          description: 'Lorem Ipsum is',
          date: '07-04-2020'
        },
        {
          profil: require('../../assets/images/user/04.jpg'),
          title: 'Barb Ackue',
          description: 'Lorem Ipsum is',
          date: '10-04-2020'
        },
        {
          profil: require('../../assets/images/user/05.jpg'),
          title: 'Greta Life',
          description: 'Lorem Ipsum is',
          date: '10-04-2020'
        },
        {
          profil: require('../../assets/images/user/06.jpg'),
          title: 'Ira Membrit',
          description: 'Lorem Ipsum is',
          date: '12-04-2020'
        }
      ],
      productFields: [
        'product_id',
        'product',
        'product_cost',
        'payment_mode',
        'status'
      ],
      productItems: [
        {
          product_id: 'P-0001',
          product: 'Dell 16 inch Laptop Backpack',
          product_cost: '$4500',
          payment_mode: 'Cash On delivered',
          status: { text: 'Available', color: 'primary' }
        },
        {
          product_id: 'P-0002',
          product: 'Tim Hawk Zeiss Pre-Moistened',
          product_cost: '$9680',
          payment_mode: 'Online Payment',
          status: { text: 'Available', color: 'primary' }
        },
        {
          product_id: 'P-0003',
          product: 'Sealed Lead Acid Battery',
          product_cost: '$7500',
          payment_mode: 'Cash On delivered',
          status: { text: 'Out Of Stock', color: 'danger' }
        },
        {
          product_id: 'P-0004',
          product: 'Veto FM Extension Cord 10 Meter Wire',
          product_cost: '$2550',
          payment_mode: 'Cash On delivered',
          status: { text: 'Limited', color: 'info' }
        },
        {
          product_id: 'P-0005',
          product: 'KANICT Dotted Finished Soft Skin Rubbersied',
          product_cost: '$6000',
          payment_mode: 'Online Payment',
          status: { text: 'Out Of Stock', color: 'danger' }
        }
      ],
      marketFields: ['market', 'price', 'change'],
      marketItems: [
        {
          market: { class: 'ri-bit-coin-line text-primary' },
          price: '0.001256',
          change: '15.25%'
        },
        {
          market: { class: 'ri-copper-diamond-line text-danger' },
          price: '0.056256',
          change: '18.30%'
        },
        {
          market: { class: 'ri-at-fill text-secondary' },
          price: '0.008569',
          change: '10.25%'
        },
        {
          market: { class: 'ri-stack-line text-info' },
          price: '0.008569',
          change: '25.50%'
        },
        {
          market: { class: 'ri-exchange-dollar-fill text-success' },
          price: '0.02356',
          change: '16.20%'
        }
      ],
      borderless: true
    }
  }
}
</script>

<style>
.iq-card-body {
  flex: unset;
}
</style>
