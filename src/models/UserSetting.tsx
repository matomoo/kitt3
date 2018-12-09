import { observable } from 'mobx';

class UserSetting {
  @observable private _asyncUserSetting: string;
  @observable private _appSet1: string;
  @observable private _appSet2: string;
  @observable private _appSet3: string;

  public get asyncUserSetting(): string {
    return this._asyncUserSetting;
  }
  public set asyncUserSetting(value: string) {
    this._asyncUserSetting = value;
  }

  public get appSet1(): string {
    const a = JSON.parse(this._asyncUserSetting);
    // console.log('setting', a, a.s1);
    return this._appSet1 = a.s1;
  }

  public get appSet2(): string {
    const a = JSON.parse(this._asyncUserSetting);
    return this._appSet2 = a.s2;
  }

  public get appSet3(): string {
    const a = JSON.parse(this._asyncUserSetting);
    return this._appSet3 = a.s3;
  }

}

export default UserSetting;
