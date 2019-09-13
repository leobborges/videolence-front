import Prediction from './Prediction';

export default class PredictModelResponse {
  public block_time: number;

  public predict_time: number;

  public video_duration: number;

  public predictions: Prediction[];
}