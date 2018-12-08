import User from '../models/User';
import UserSetting from '../models/UserSetting';
import { observable } from 'mobx';

class ObservableListStore {
  @observable private _user: User;
  @observable private _userSetting: UserSetting;

  constructor() {
    this._user = new User();
    this._userSetting = new UserSetting();
  }

  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }

  public get userSetting(): UserSetting {
    return this._userSetting;
  }
  public set userSetting(value: UserSetting) {
    this._userSetting = value;
  }
}

const observableListStore = new ObservableListStore();
export default observableListStore;
