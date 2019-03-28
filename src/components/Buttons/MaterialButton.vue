<template>
  <button :class="classNames">
    <i class="material-icons">{{icon}}</i>
    <span>{{text}}</span>
  </button>
</template>

<script>
export default {
  name: "MaterialButton",
  props: {
    icon: String,
    text: String,
    disabled: Boolean
  },
  computed: {
    classNames() {
      let base = "button ripple";
      if (this.disabled === true) base += " disabled";
      return base;
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #ed3239;

i {
  vertical-align: middle;
}

/* Ripple effect */
.button.ripple {
  background-position: center;
  transition: background 0.8s;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: $color;
  box-shadow: 0 0 4px #999;
  outline: none;

  span {
    padding: 8px;
    vertical-align: middle;
  }

  &.disabled {
    pointer-events: none;
    background-color: #999;
  }
}

.button:hover {
  background: #ed3239b0 radial-gradient(circle, transparent 1%, #ed3239b0 1%)
    center/15000%;
}

.button:active {
  background-color: #ed3239d4;
  background-size: 100%;
  transition: background 0s;
}
</style>
