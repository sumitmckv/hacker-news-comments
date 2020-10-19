<template>
  <div>
    <form @submit.prevent="addUsrComment" class="max-w-lg mx-10 my-4">
      <t-textarea
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal"
        name="reply-textarea"
        v-model="message"
      />
      <div class="flex items-center mt-4">
        <button
          class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
          type="submit"
        >
          Add comment
        </button>
      </div>
    </form>
    <div v-if="comments && comments.count" class="mx-10 mt-3">
      <h3 class="text-lg text-gray-800">
        {{ comments.count }} {{ comments.count > 1 ? `Comments` : `Comment` }}
      </h3>
      <comment :comments="comments.comments" />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import {AddComment, CommentResponse} from '@/models/comment';
import Comment from '@/components/Comment.vue';
import {UserResponse} from '@/models/user';
const user = namespace('user');
const comment = namespace('comment');
@Component({
  components: {Comment},
})
export default class Comments extends Vue {
  @comment.State
  private comments!: CommentResponse;

  private message = '';

  @user.State
  private currentUser!: UserResponse;

  @comment.Action
  private getComments!: () => Promise<void>;

  @comment.Action
  private addComment!: (req: AddComment) => Promise<void>;

  mounted() {
    this.getComments();
  }

  addUsrComment() {
    if (!this.currentUser || !this.currentUser.token) {
      this.$router.push('/login');
    }
    const req: AddComment = {
      username: this.currentUser.username,
      message: this.message,
    };

    this.addComment(req);
  }
}
</script>

<style scoped></style>
