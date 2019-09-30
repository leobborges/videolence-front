import PredictionViewModel from './PrediticionViewModel';
import PredictModelResponse from './PredictModelResponse';


export default class PredictViewModel {
  public constructor(init?: Partial<PredictViewModel>) {
    Object.assign(this, init);
  }

  public block_time: number;

  public predict_time: string;

  public video_duration: string;

  public predictions: PredictionViewModel[];

  public fromClientModel(model: PredictModelResponse): PredictViewModel {
    if (model === null || model === undefined) {
      return undefined;
    }

    return {
      block_time: model.block_time,
      predict_time: model.predict_time.toString(),
      video_duration: model.video_duration.toString(),
      predictions: PredictionViewModel.prototype.fromClientArrayModel(model.predictions, model.block_time, model.video_duration)
    } as PredictViewModel;
  }
}