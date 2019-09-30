import Prediction from './Prediction';

export default class PredictionViewModel {
  public constructor(init?: Partial<PredictionViewModel>) {
    Object.assign(this, init);
  }

  public type: string;

  public analysis_start: string;

  public analysis_end: string;

  public fromClientArrayModel(model: Prediction[], size: number, video_duration: number): PredictionViewModel[] {
    if (model === null || model === undefined || model.length === 0) {
      return null;
    }

    return model.map(predict => {
      return {
        type: predict.keyword === "['non-violence']" ? 'Não violento' : 'Violento',
        analysis_start: predict.block_time_start.toFixed(2),
        analysis_end: (predict.block_time_start + size > video_duration) ? video_duration.toFixed(2) : (predict.block_time_start + size).toFixed(2),
      } as PredictionViewModel;
    });
  }
}