<template>
  <div>
    <t-modal
      :value="value"
      v-if="name === 'reply'"
      @before-close="$emit('close')"
      header="Reply"
    >
      <t-textarea
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal"
        name="reply-textarea"
        v-model="message"
      />
      <template v-slot:footer>
        <div class="flex justify-between">
          <button
            class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
            type="button"
            @click="replyComment"
          >
            Reply
          </button>
        </div>
      </template>
    </t-modal>
    <t-modal
      :value="value"
      v-if="name === 'edit'"
      @before-close="$emit('close')"
      header="Edit comment"
    >
      <t-textarea
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal"
        name="edit-textarea"
        v-model="message"
      />
      <template v-slot:footer>
        <div class="flex justify-between">
          <button
            class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
            type="button"
            @click="editComment"
          >
            Edit
          </button>
        </div>
      </template>
    </t-modal>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class CommentModal extends Vue {
  @Prop()
  private value!: boolean;
  @Prop()
  private message!: string;
  @Prop()
  private name!: string;

  editComment() {
    this.$emit('edit', this.message);
  }

  replyComment() {
    this.$emit('reply', this.message);
  }
}
</script>

<style scoped></style>
