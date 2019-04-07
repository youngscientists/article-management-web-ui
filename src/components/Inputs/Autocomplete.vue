<template>
  <div class="autocomplete">
    <input :value="boxValue" @keyup="handleKeyup" :placeholder="placeholder" ref="input">
    <div class="autocomplete-items" v-if="isOpen">
      <div
        v-for="item in items"
        :key="item.email"
        @click="setValue(item)"
      >{{item.name}} ({{item.email}})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Autocomplete",
  props: {
    value: String,
    placeholder: String
  },
  data() {
    return {
      timer: Object,
      text: ""
    };
  },
  computed: {
    items() {
      return this.$store.state.editors.editors;
    },
    isOpen() {
      return this.hasItems;
    },
    hasItems() {
      const s = this.$store.state.editors.editors.length;
      return s ? s.length != 0 : false;
    },
    boxValue() {
      return this.text || this.value;
    }
  },
  methods: {
    handleKeyup(event) {
      clearInterval(this.timer);
      this.timer = setTimeout(() => this.update(event.target.value), 500);
    },
    update(text) {
      this.text = text;
      this.$emit("input", this.text);
    },
    setValue(value) {
      this.$store.dispatch("editors/clear");
      this.text = value.email;
      this.$emit("set", value);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.autocomplete {
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  .results {
  }
}

.autocomplete-items {
  border: 1px solid #d4d4d4;

  border-bottom: none;

  border-top: none;

  z-index: 99;

  /*position the autocomplete items to be the same width as the container:*/
  position: absolute;

  top: 100%;

  left: 0;

  right: 0;

  max-height: 320px;

  overflow-y: scroll;
}

.autocomplete-items div {
  padding: 10px;

  cursor: pointer;

  background-color: #fff;

  border-bottom: 1px solid #d4d4d4;

  word-break: break-word;
}

.autocomplete-items div:hover {
  /*when hovering an item:*/

  background-color: #e9e9e9;
}

.autocomplete-active {
  /*when navigating through the items using the arrow keys:*/

  background-color: DodgerBlue !important;

  color: #ffffff;
}
</style>
