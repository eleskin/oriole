<template>
  <div class="UserView">
    <h3 class="UserView__title">{{ $route['params'].user }}</h3>
    <ChatComponent></ChatComponent>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import ChatComponent from '@/components/UserView/ChatComponent.vue';

@Options({
  components: {
    ChatComponent,
  },
})
export default class UserView extends Vue {
}
</script>

<style lang="scss" scoped>
.UserView {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .UserView__title {
    margin: 0;
  }
}
</style>
