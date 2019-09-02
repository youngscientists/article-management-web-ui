<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-4 col-lg-6"></div>
      </div>
      <div class="row">
        <div class="col">
          <articles-table title="Articles"></articles-table>
        </div>
      </div>
    </base-header>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";

// Tables
import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import PageVisitsTable from "./Dashboard/PageVisitsTable";
import ArticlesTable from "./Tables/ArticlesTable";

export default {
  components: {
    LineChart,
    BarChart,
    PageVisitsTable,
    SocialTrafficTable,
    ArticlesTable
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: []
        },
        extraOptions: chartConfigs.blueChartOptions
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29]
            }
          ]
        }
      },
      hmm: [1, 2, 3]
    };
  },
  computed: {
    stats() {
      return {
        totalArticles: {
          count: 450,
          change: 12.4
        },
        articlesEdited: {
          count: 102,
          change: -3.2
        },
        articlesEditedByYou: {
          count: 2,
          change: 32
        }
      };
    }
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted() {
    this.initBigChart(0);
  }
};
</script>
<style></style>
