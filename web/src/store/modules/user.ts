import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {user} from '@/api';
import {User, UserResponse} from '@/models/user';

@Module({namespaced: true})
export default class UserStore extends VuexModule {
  public currentUser: UserResponse = {} as UserResponse;
  public isRegistrationError = false;
  public isLoginError = false;

  @Mutation
  public setCurrentUser(user: UserResponse): void {
    this.currentUser = user;
  }

  @Mutation
  public setRegistrationError(isError: boolean): void {
    this.isRegistrationError = isError;
  }

  @Mutation
  public setLoginError(isError: boolean): void {
    this.isLoginError = isError;
  }

  @Mutation
  public logoutUser(): void {
    this.currentUser = {} as UserResponse;
  }

  @Action
  public async register(req: User): Promise<void> {
    try {
      const res: UserResponse = await user.register(req);
      this.context.commit('setRegistrationError', false);
      this.context.commit('setCurrentUser', res);
    } catch (e) {
      console.error("Error on registration", e);
      this.context.commit('setRegistrationError', true);
    }
  }

  @Action
  public async login(req: User): Promise<void> {
    try {
      const res: UserResponse = await user.login(req);
      this.context.commit('setLoginError', false);
      this.context.commit('setCurrentUser', res);
    } catch (e) {
      console.error("Error on login", e);
      this.context.commit('setLoginError', true);
    }
  }

  @Action
  public logout(): void {
    this.context.commit('logoutUser');
  }
}