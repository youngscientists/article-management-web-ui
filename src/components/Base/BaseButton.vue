<template>
  <component
    :is="tag"
    class="btn"
    :class="classes"
    @click="handleClick"
    v-theme="type === 'primary' 
    ? {background: 'primary', shadow: false, focus: {background: 'primaryFocus'}, hover: {background: 'primaryHover'}, border: 'primary', update: [ {type: 'background', value: 'button'}]} 
    : {background: 'button', shadow: false, focus: {background: 'primaryFocus', border: 'primaryFocus'},  hover: {background: 'primaryHover', border: 'primaryHover'}, border: 'button', update: [ {type: 'background', value: 'button'}, {type: 'border', value: 'button'}]}"
    :type="tag === 'button' ? nativeType: ''"
  >
    <span v-if="$slots.icon || icon && $slots.default" class="btn-inner--icon">
      <slot name="icon">
        <i
          v-theme="type === 'primary' ? {color: 'secondaryFont'} : {color: 'primaryFont'}"
          :class="icon"
        />
      </slot>
    </span>
    <i
      v-theme="type === 'primary' ? {color: 'secondaryFont'} : {color: 'primaryFont'}"
      v-if="!$slots.default"
      :class="icon"
    />
    <span
      v-if="$slots.icon || icon && $slots.default"
      v-theme="type === 'primary' ? {color: 'secondaryFont'} : {color: 'primaryFont'}"
      class="btn-inner--text"
    >
      <slot>{{ text }}</slot>
    </span>
    <slot v-if="!$slots.icon && !icon" />
  </component>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    tag: {
      type: String,
      default: "button",
      description: "Button tag (default -> button)"
    },
    type: {
      type: String,
      default: "default",
      description: "Button type (e,g primary, danger etc)"
    },
    size: {
      type: String,
      default: "",
      description: "Button size lg|sm"
    },
    textColor: {
      type: String,
      default: "",
      description: "Button text color (e.g primary, danger etc)"
    },
    nativeType: {
      type: String,
      default: "button",
      description: "Button native type (e.g submit,button etc)"
    },
    icon: {
      type: String,
      default: "",
      description: "Button icon"
    },
    text: {
      type: String,
      default: "",
      description: "Button text in case not provided via default slot"
    },
    outline: {
      type: Boolean,
      default: false,
      description: "Whether button style is outline"
    },
    rounded: {
      type: Boolean,
      default: false,
      description: "Whether button style is rounded"
    },
    iconOnly: {
      type: Boolean,
      default: false,
      description: "Whether button contains only an icon"
    },
    block: {
      type: Boolean,
      default: false,
      description: "Whether button is of block type"
    }
  },
  computed: {
    classes() {
      let btnClasses = [
        { "btn-block": this.block },
        { "rounded-circle": this.rounded },
        { "btn-icon-only": this.iconOnly },
        { [`text-${this.textColor}`]: this.textColor },
        { "btn-icon": this.icon || this.$slots.icon },
        this.type && !this.outline ? `btn-${this.type}` : "",
        this.outline ? `btn-outline-${this.type}` : ""
      ];
      if (this.size) {
        btnClasses.push(`btn-${this.size}`);
      }
      return btnClasses;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>
