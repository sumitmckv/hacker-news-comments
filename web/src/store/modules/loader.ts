import {Module, Mutation, VuexModule} from 'vuex-module-decorators';

@Module({namespaced: true})
export default class Loader extends VuexModule {
  public loading = false;
  public doNotLoad = false;

  @Mutation
  public startLoading(): void {
    this.loading = true;
  }

  @Mutation
  public endLoading(): void {
    this.loading = false;
  }

  @Mutation
  public setDoNotLoad(): void {
    this.doNotLoad = true;
  }
}
