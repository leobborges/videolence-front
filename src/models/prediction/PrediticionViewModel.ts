import Prediction from './Prediction';

export default class PredictionViewModel {
  public constructor(init?: Partial<PredictionViewModel>) {
    Object.assign(this, init);
  }

  public type: string;

  public analysis_start: number;

  public analysis_end: number;

  public fromClientArrayModel(model: Prediction[], size: number): PredictionViewModel[] {
    if (model === null || model === undefined || model.length === 0) {
      return null;
    }

    return model.map(predict => {
      return {
        type: predict.keyword === "['non-violence']" ? 'Não violento' : 'Violento',
        analysis_start: predict.block_time_start,
        analysis_end: predict.block_time_start + size,
      } as PredictionViewModel;
    });
  }
}