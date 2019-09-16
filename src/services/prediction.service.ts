import { Injectable } from '@angular/core';
import PredictViewModel from 'src/models/PredictViewModel';
import { ApiService } from './api.service';

@Injectable()
export class PredictionService {
  constructor(public apiService: ApiService) { }

  predict(filename: string): Promise<PredictViewModel> {
    const bodyRequest = {
      video: filename
    };

    const urlPath = 'predict';

    return this.apiService.post(bodyRequest, urlPath).toPromise().then( response => {
      return PredictViewModel.prototype.fromClientModel(response);
    });
  }
}