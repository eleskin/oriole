<template>
  <div class="LoginView">
    <h1 class="LoginView__title">Hello, #{{ username }}</h1>
    <form class="LoginView__form" @submit.prevent="formSubmitHandler">
      <label for="LoginView__input_username">
        <input
          class="LoginView__input LoginView__input_username"
          id="LoginView__input_username"
          placeholder="Enter username"
          type="text"
          v-model="form.username"
          required
        >
        <button class="LoginView__button" type="submit">Search</button>
      </label>
    </form>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
  data: () => ({
    username: '1234',
    form: {
      username: '',
    },
  }),
  methods: {
    formSubmitHandler() {
      this.$router.push(`/user/${this.form.username}`);
    },
  },
})
export default class HomeView extends Vue {
}
</script>

<style lang="scss" scoped>
.LoginView {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .LoginView__form {
    background-color: #ffffff;
  }
}
</style>
