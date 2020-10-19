<template>
  <div
    class="bg-white w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto mt-10"
  >
    <div class="py-4 px-6">
      <alert class="my-4" v-if="isLoginError" message="Failed to login" />
      <p class="mt-1 text-gray-500">Login or create account</p>
      <form @submit.prevent="usrLogin">
        <div class="mt-4 w-full">
          <input
            class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            aria-label="Username"
            v-model="username"
          />
        </div>

        <div class="mt-4 w-full">
          <input
            class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            aria-label="Password"
            v-model="password"
          />
        </div>

        <div class="flex items-center mt-4">
          <button
            class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>

    <div class="flex items-center justify-center py-4 bg-gray-100 text-center">
      <span class="text-gray-600 text-sm">Don't have an account? </span>

      <a
        href="/register"
        class="text-blue-600 font-bold mx-2 text-sm hover:text-blue-500"
        >Register</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import {User} from '@/models/user';
import Alert from '@/components/Alert.vue';
const user = namespace('user');
@Component({
  components: {Alert},
})
export default class Login extends Vue {
  private username = '';
  private password = '';

  @user.State
  private isLoginError!: boolean;

  @user.Action
  private login!: (req: User) => Promise<void>;

  async usrLogin() {
    await this.login({
      username: this.username,
      password: this.password,
    });
    if (!this.isLoginError) {
      await this.$router.push('/');
    }
  }
}
</script>

<style scoped></style>
