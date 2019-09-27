import LoginModelResponse from './LoginModelResponse';


export default class LoginModel {
  public constructor(init?: Partial<LoginModel>) {
    Object.assign(this, init);
  }

  public username: string;

  public authToken: string;

  public fromClientModel(model: LoginModelResponse): LoginModel {
    if (model === null || model === undefined) {
      return undefined;
    }

    return {
      username: model.user,
      authToken: model.auth_token,
    } as LoginModel;
  }
}