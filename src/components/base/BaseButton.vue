<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'green',
    },
    isInactive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <router-link
    :to="to"
    :class="['base-button_' + type, { is_inactive: isInactive }]"
    class="base-button"
    custom
    v-slot="{ navigate }"
  >
    <button @click="navigate" role="link"><slot /></button>
  </router-link>
</template>

<style lang="scss">
.base-button {
  font-size: 12px;
  text-transform: uppercase;
  box-sizing: border-box;
  border: none;
  border-radius: 50px;
  height: 47px;
  outline: none;
  font-weight: bold;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  @include ifdesktop {
    min-width: 100px;
  }

  &.is_inactive {
    color: #eee;
    cursor: default;
    pointer-events: none;
  }

  &_primary,
  &_orange,
  &_green {
    position: relative;
    background-size: 101%;
    color: $white;
    box-shadow: 0 em(2px) em(16px) rgba(15, 103, 240, 0.5);
    transition: box-shadow $speed;

    &.is_inactive {
      background: #f1f7ff;
      box-shadow: none;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: $white;
      opacity: 0;
      border-radius: em(50px);
      transition: opacity $speed;
    }

    &:hover {
      &::after {
        opacity: 0.1;
      }
      box-shadow: 0 em(4px) em(18px) rgba(15, 103, 240, 1);
    }
    &:active {
      background: darken($blue, 10%);
      box-shadow: none;
    }
  }

  &_primary {
    @extend %blue-gradient;
    &:active {
      background: darken($blue, 10%);
    }
  }

  &_orange {
    @extend %orange-gradient;
    &:active {
      background: darken($orange, 10%);
    }
  }

  &_green {
    background: $green;
    &:hover {
      &::after {
        opacity: 0.1;
      }
      box-shadow: 0 em(4px) em(18px) rgba(15, 103, 240, 1);
    }
    &:active {
      background: darken($green, 10%);
    }
  }
}
</style>
