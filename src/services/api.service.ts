import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import PredictModelResponse from 'src/models/prediction/PredictModelResponse';
import LoginModelResponse from 'src/models/auth/LoginModelResponse';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:5000/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  private post<T>(body: any, path?: string) {
    return new Promise<T>((resolve, reject) => {
      this.http.post(
        `${this.configUrl}${path}`,
        body,
        this.httpOptions,
      ).toPromise().then(response => {
        resolve(<T> response);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public login(body: any, path?: string): Promise<LoginModelResponse> {
    return this.post<LoginModelResponse>(body, path);
  }

  public predict(body: any, path?: string): Promise<PredictModelResponse> {
    return this.post<PredictModelResponse>(body, path);
  }
}