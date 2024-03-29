import { Injectable } from '@angular/core';
import PredictViewModel from 'src/models/prediction/PredictViewModel';
import { ApiService } from './api.service';

@Injectable()
export class PredictionService {
  constructor(public apiService: ApiService) { }

  predict(filename: string): Promise<PredictViewModel> {
    const bodyRequest = {
      video: filename
    };

    const urlPath = 'predict';

    return new Promise((resolve, reject) => {
      this.apiService.predict(
        bodyRequest,
        urlPath,
      ).then( response => {
        resolve(PredictViewModel.prototype.fromClientModel(response));
      }).catch(error => {
        reject(error);
      });
    });
  }
}