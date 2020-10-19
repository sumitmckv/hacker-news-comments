<template>
  <header class="bg-white">
    <nav class="shadow">
      <div
        class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center"
      >
        <div class="flex justify-between items-center">
          <div>
            <a
              class="text-gray-800 text-xl font-semibold tracking-tight md:text-2xl hover:text-gray-700"
              href="/"
              >Hacker News Comment</a
            >
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              @click="toggle"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="md:flex items-center" v-if="!hide">
          <div class="flex flex-col md:flex-row md:mx-6">
            <a
              v-if="!currentUser || !currentUser.token"
              class="my-1 text-xs text-gray-700 uppercase tracking-wider font-semibold  hover:text-blue-500 md:mx-4 md:my-0"
              href="/login"
              >Login</a
            >
            <div v-else class="items-center justify-center">
              <span>Hi {{ currentUser.username }}</span>
              <button
                class="my-1 text-xs text-gray-700 uppercase tracking-wider font-semibold  hover:text-blue-500 md:mx-4 md:my-0"
                @click="logout"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import {UserResponse} from '@/models/user';
const user = namespace('user');

@Component
export default class AppHeader extends Vue {
  private hide = false;

  @user.State
  private currentUser!: UserResponse;

  @user.Action
  private logout!: () => void;

  private toggle() {
    this.hide = !this.hide;
  }
}
</script>
