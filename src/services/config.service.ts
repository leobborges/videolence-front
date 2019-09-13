import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import PredictModelResponse from 'src/models/PredictModelResponse';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:5000/predict';

  bodyRequest = {
    video: "nv2.avi"
  }

  postConfig(): Observable<PredictModelResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<PredictModelResponse>(this.configUrl, this.bodyRequest, httpOptions);
  }
}