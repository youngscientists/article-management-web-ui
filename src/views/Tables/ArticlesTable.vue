<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">{{title}}</h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark': ''"
        :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template slot="columns">
          <th>Date</th>
          <th>Title</th>
          <th>Subject</th>
          <th>Type</th>
          <th>Editor</th>
          <th>Status</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <td class="date">{{row.date}}</td>
          <th scope="row">
            <span class="name text-sm">{{row.title}}</span>
          </th>
          <td class="subject">{{row.subject}}</td>
          <td class="type">{{row.type}}</td>
          <td class="editor">{{row.editor}}</td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.status}}</span>
            </badge>
          </td>

          <!-- <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.completion}}%</span>
              <div>
                <base-progress
                  :type="row.statusType"
                  :show-percentage="false"
                  class="pt-0"
                  :value="row.completion"
                />
              </div>
            </div>
          </td>-->

          <td class="text-right">
            <base-dropdown class="dropdown" position="right">
              <a
                slot="title"
                class="btn btn-sm btn-icon-only text-light"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Delete</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </template>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent': ''"
    >
      <!-- <base-pagination total=30></base-pagination> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "articles-table",
  props: {
    type: {
      type: String
    },
    title: { type: String, default: "Articles" }
  },
  data() {
    return {
      tableData: [
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          type: "test",
          date: "2019",
          editor: "me",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "awd",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          subject: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/angular.jpg",
          title: "Angular Now UI Kit PRO",
          subject: "$1800 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        },
        {
          img: "img/theme/sketch.jpg",
          title: "Black Dashboard",
          subject: "$3150 USD",
          status: "delayed",
          statusType: "danger",
          completion: 72
        },
        {
          img: "img/theme/react.jpg",
          title: "React Material Dashboard",
          subject: "$4400 USD",
          status: "on schedule",
          statusType: "info",
          completion: 90
        },
        {
          img: "img/theme/vue.jpg",
          title: "Vue Paper UI Kit PRO",
          subject: "$2200 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        }
      ]
    };
  }
};
</script>
<style>
</style>
