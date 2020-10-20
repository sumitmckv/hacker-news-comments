<template>
  <div v-if="comments">
    <div class="comment" v-for="(comment, index) in comments" :key="index">
      <hr class="mx-5" />
      <div class="flex w-full mx-auto overflow-hidden">
        <div class="-mx-3 py-2 px-4">
          <div class="mx-3">
            <info :username="comment.username" :date="comment.createdAt" />
            <p class="text-gray-800">
              {{ comment.message }}
            </p>

            <div class="flex items-center">
              <button
                @click="openReplyModal(comment)"
                class="text-gray-600 hover:text-gray-500 text-sm tracking-wider font-medium"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mx-1 fill-current text-gray-500"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
                    />
                  </svg>
                  <span>Reply</span>
                </div>
              </button>

              <button
                v-if="currentUser && currentUser.username === comment.username"
                @click="openEditModal(comment)"
                class="text-gray-600 hover:text-gray-500 text-sm tracking-wider font-medium"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mx-1 fill-current text-gray-500"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    />
                  </svg>
                  <span>Edit</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-5">
        <comment :comments="comment.children"></comment>
      </div>
    </div>
    <comment-modal
      v-model="showModal"
      :message="message"
      :name="modalName"
      @reply="saveReply"
      @edit="saveEdit"
      @close="showModal = false"
    />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {
  AddComment,
  Comment as CommentModel,
  EditComment,
} from '@/models/comment';
import {UserResponse} from '@/models/user';
import {namespace} from 'vuex-class';
import CommentModal from '@/components/CommentModal.vue';
import Info from '@/components/Info.vue';
const user = namespace('user');
const comment = namespace('comment');

@Component({
  name: 'comment',
  components: {CommentModal, Info},
})
export default class Comment extends Vue {
  @Prop()
  private comments!: CommentModel;

  private showModal = false;
  private modalName = '';
  private message = '';
  private comment: CommentModel = {} as CommentModel;

  @user.State
  private currentUser!: UserResponse;

  @comment.Action
  private addComment!: (req: AddComment) => Promise<void>;

  @comment.Action
  private editComment!: (req: EditComment) => Promise<void>;

  openReplyModal(comment: CommentModel) {
    if (!this.currentUser || !this.currentUser.token) {
      this.$router.push('/login');
    }
    this.showModal = true;
    this.message = '';
    this.modalName = 'reply';
    this.comment = comment;
  }

  openEditModal(comment: CommentModel) {
    if (!this.currentUser || !this.currentUser.token) {
      this.$router.push('/login');
    }
    this.showModal = true;
    this.message = comment.message;
    this.modalName = 'edit';
    this.comment = comment;
  }

  saveReply(message: string) {
    this.comment.message = message;
    this.showModal = false;
    const req: AddComment = {
      username: this.currentUser.username,
      message,
    };

    if (this.comment && this.comment._id) {
      req.parentId = this.comment._id;
    }

    this.addComment(req);
  }

  saveEdit(message: string) {
    this.comment.message = message;
    this.showModal = false;
    const req: EditComment = {
      id: this.comment._id,
      message: message,
    };
    this.editComment(req);
  }
}
</script>

<style scoped></style>
