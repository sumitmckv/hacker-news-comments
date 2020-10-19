import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {comment} from '@/api';
import {AddComment, EditComment, CommentResponse} from '@/models/comment';

@Module({namespaced: true})
export default class CommentStore extends VuexModule {
  public comments: CommentResponse = {} as CommentResponse;

  @Mutation
  public saveComments(comments: CommentResponse): void {
    this.comments = comments;
  }

  @Action
  public async getComments(): Promise<void> {
    try {
      const comments: CommentResponse = await comment.getComments();
      this.context.commit('saveComments', comments);
    } catch (e) {
      console.error('Error occurred on fetch comments', e);
    }
  }

  @Action
  public async addComment(req: AddComment): Promise<void> {
    try {
      await comment.addComment(req);
      this.context.dispatch('getComments');
    } catch (e) {
      console.error('Error occurred on fetch comments', e);
    }
  }

  @Action
  public async editComment(req: EditComment): Promise<void> {
    try {
      await comment.editComment(req);
      this.context.dispatch('getComments');
    } catch (e) {
      console.error('Error occurred on fetch comments', e);
    }
  }
}
