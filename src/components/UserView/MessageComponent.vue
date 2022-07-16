<template>
  <div
    :class="`
      MessageComponent ${isMyMessage ? 'MessageComponent_user' : 'MessageComponent_friend'}
    `">
    <slot></slot>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    isMyMessage: Boolean,
  },
})
export default class MessageComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.MessageComponent {
  background-color: #ffffff;
  padding: 8px;
  border-radius: 4px;

  &_user {
    margin-left: auto;
  }

  &_friend {
    margin-right: auto;
  }
}
</style>
