import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import LoginModel from 'src/models/auth/LoginModel';

@Injectable()
export class AuthService {
  constructor(public apiService: ApiService) { }

  login(username: string, password: string): Promise<LoginModel> {
    const bodyRequest = {
      login: username,
      password
    };

    const urlPath = 'login';

    return new Promise((resolve, reject) => {
      this.apiService.login(
        bodyRequest,
        urlPath,
      ).then(response => {
        resolve(LoginModel.prototype.fromClientModel(response));
      }).catch(error => {
        reject(error);
      });
    });
  }
}