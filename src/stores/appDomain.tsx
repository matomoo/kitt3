import { observable, action } from 'mobx';

class ObservableListAppDomain {
  @observable private userSettingS1;
  @observable private userSettingS2;
  @observable private userSettingS3;

  @action
  public _userSettingS1(x) {
    this.userSettingS1 = x;
  }

  @action
  public _userSettingS2(x) {
    this.userSettingS2 = x;
  }

  @action
  public _userSettingS3(x) {
    this.userSettingS3 = x;
  }

}

// const observableListAppDomain = new ObservableListStore();
export default ObservableListAppDomain;
