<template>
  <div
    data-notify="container"
    class="alert alert-notify alert-dismissible"
    :class="[
      { 'alert-with-icon': icon },
      verticalAlign,
      horizontalAlign
    ]"
    role="alert"
    :style="customPosition"
    data-notify-position="top-center"
    v-theme="{shadow: 'strong', update: true}"
    @click="tryClose"
  >
    <template v-if="icon || $slots.icon">
      <slot name="icon">
        <span class="alert-icon" data-notify="icon">
          <i :class="icon" />
        </span>
      </slot>
    </template>

    <span class="alert-text">
      <span v-if="title" class="title">
        <b :style="`color: ${notificationTheme.fontColor}`">
          {{ title }}
          <br />
        </b>
      </span>

      <span :style="`color: ${notificationTheme.fontColor}`" v-if="message" v-html="message" />

      <content-render
        :style="`color: ${notificationTheme.fontColor}`"
        v-if="!message && component"
        :component="component"
      />
    </span>

    <slot name="dismiss-icon">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close">
        <span v-theme="{color: 'icon', hover: {color: 'muted'}}" aria-hidden="true">×</span>
      </button>
    </slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { getModule } from "vuex-module-decorators";
import themeModule from "@/store/modules/theme/theme.index";
@Component({
  components: {
    contentRender: {
      props: ["component"],
      // @ts-ignore
      render: h => h(this.component)
    }
  },
  props: {
    message: String,
    title: String,
    icon: String,
    verticalAlign: {
      type: String,
      default: "bottom",
      validator: value => {
        let acceptedValues = ["top", "bottom"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    horizontalAlign: {
      type: String,
      default: "center",
      validator: value => {
        let acceptedValues = ["left", "center", "right"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: "info",
      validator: value => {
        let acceptedValues = ["info", "error", "warning", "success"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    timeout: {
      type: Number,
      default: 5000,
      validator: value => {
        return value >= 0;
      }
    },
    timestamp: {
      type: Date,
      default: () => new Date()
    },
    component: {
      type: [Object, Function]
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    clickHandler: Function
  },
  data() {
    return {
      elmHeight: 0
    };
  },
  computed: {
    hasIcon() {
      return this.$props.icon && this.$props.icon.length > 0;
    },

    customPosition() {
      let initialMargin = 20;
      let alertHeight = this.$data.elmHeight + 10;
      let sameAlertsCount = this.$notifications.state.filter(alert => {
        return (
          alert.horizontalAlign === this.$props.horizontalAlign &&
          alert.verticalAlign === this.$props.verticalAlign &&
          alert.timestamp <= this.$props.timestamp
        );
      }).length;
      if (this.$notifications.settings.overlap) {
        sameAlertsCount = 1;
      }
      let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin;
      let styles: { [key: string]: string } = {};
      if (this.$props.verticalAlign === "top") {
        styles.top = `${pixels}px`;
      } else {
        styles.bottom = `${pixels}px`;
      }

      const theme = getModule(themeModule, this.$store);
      const notificationTheme =
        theme.themes[theme.currentTheme].notificationColors;

      styles.backgroundColor = notificationTheme[this.$props.type];
      styles.border = "none";
      return styles;
    },
    notificationTheme() {
      const theme = getModule(themeModule, this.$store);
      return theme.themes[theme.currentTheme].notificationColors;
    }
  },
  mounted() {
    this.$data.elmHeight = this.$el.clientHeight;
    if (this.$props.timeout) {
      // @ts-ignore
      setTimeout(this.close, this.$props.timeout);
    }
  },
  methods: {
    close() {
      this.$emit("close", this.$props.timestamp);
    },
    tryClose(evt) {
      if (this.$props.clickHandler) {
        this.$props.clickHandler(evt, this);
      }
      if (this.$props.closeOnClick) {
        // @ts-ignore
        this.close();
      }
    }
  }
})
export default class Notification extends Vue {}
</script>
<style lang="scss">
.notifications .alert {
  position: fixed;
  z-index: 10000;

  &[data-notify="container"] {
    max-width: 500px;
  }

  &.center {
    margin: 0 auto;
  }
  &.left {
    left: 20px;
  }
  &.right {
    right: 20px;
  }
}
</style>
