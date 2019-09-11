<template>
  <card
    class="card-stats"
    :show-footer-line="true"
  >
    <div class="row">
      <div class="col">
        <slot>
          <h5
            v-if="title"
            class="card-title text-uppercase text-muted mb-0"
          >
            {{ title }}
          </h5>
          <span
            v-if="subTitle"
            class="h2 font-weight-bold mb-0"
          >{{ subTitle }}</span>
        </slot>
      </div>

      <div
        v-if="$slots.icon || icon"
        class="col-auto"
      >
        <slot name="icon">
          <div
            class="icon icon-shape text-white rounded-circle shadow"
            :class="[`bg-${type}`, iconClasses]"
          >
            <i :class="icon" />
          </div>
        </slot>
      </div>
    </div>

    <p class="mt-3 mb-0 text-sm">
      <slot name="footer" />
    </p>
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'StatsCard',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: String,
      title: String,
      subTitle: String,
      iconClasses: [String, Array]
    }
  };
</script>
<style></style>
