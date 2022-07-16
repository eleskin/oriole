<template>
  <div class="ChatComponent">
    <div class="ChatComponent__messages">
      <MessageComponent
        v-for="message in messages"
        :key="message.id"
        :is-my-message="message.isMyMessage"
      >{{ message.value }}</MessageComponent>
    </div>
    <form class="ChatComponent__form" @submit.prevent="formSubmitHandler">
      <label for="ChatComponent__textarea_message">
        <textarea
          class="ChatComponent__textarea ChatComponent__textarea_message"
          id="ChatComponent__textarea_message"
          v-model="form.message"
          type="text"
          required
        ></textarea>
      </label>
      <button class="ChatComponent__button">Send</button>
    </form>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import MessageComponent from '@/components/UserView/MessageComponent.vue';

@Options({
  data: () => ({
    messages: [
      { id: 0, value: 'Message1', isMyMessage: true },
      { id: 1, value: 'Message2', isMyMessage: false },
      { id: 2, value: 'Message3', isMyMessage: true },
      { id: 3, value: 'Message4', isMyMessage: false },
    ],
    form: {
      message: '',
    },
  }),
  methods: {
    formSubmitHandler() {
      this.messages.push({
        id: this.messages[this.messages.length - 1].id + 1,
        value: this.form.message,
        isMyMessage: true,
      });
      this.form.message = '';
    },
  },
  components: {
    MessageComponent,
  },
})
export default class ChatComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.ChatComponent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .ChatComponent__messages {
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    grid-row-gap: 8px;
    padding: 16px;
  }
}
</style>
