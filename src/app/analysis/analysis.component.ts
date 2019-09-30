import { Component, OnInit } from '@angular/core';

import { PredictionService } from 'src/services/prediction.service';
import PredictViewModel from 'src/models/prediction/PredictViewModel';
import PredictionViewModel from 'src/models/prediction/PrediticionViewModel';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'Analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  public response: PredictViewModel;
  public summaryResponse: PredictionViewModel[];
  public isLoading = false;
  public videoSelected = null;
  public validTypeSelected = true;
  public videoIsSelected = false;
  public showAnalysisDetails = false;
  public fileURL = null;
  public error = null;

  constructor(
    private predictionService: PredictionService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
  }

  private handleSummaryResponse(): void {
    this.summaryResponse = this.response.predictions.filter(prediction => prediction.type === 'Violento');
  }

  public reset(): void {
    this.response = null;
    this.summaryResponse = null;
    this.isLoading = false;
    this.videoSelected = null;
    this.videoIsSelected = false;
    this.validTypeSelected = true;
    this.showAnalysisDetails = false;
    this.fileURL = null;
    this.error = null;
  }

  private handleFileType(videoType: string): boolean {
    return (videoType === "video/mp4" || videoType === "video/webm" || videoType === "video/ogg");
  }

  public onFileChange(event): void {
    const files = event.target.files;
    const file = files[0];

    const URL = window.URL;

    if(files && files.length) {
      this.videoSelected = file.name;
      this.videoIsSelected = true;
      this.validTypeSelected = this.handleFileType(file.type);

      this.fileURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
  }

  public onClick(): void {
    if (this.videoIsSelected) {
      this.isLoading = true;

      this.predictionService.predict(this.videoSelected)
        .then(response => {
          this.isLoading = false;
          this.videoIsSelected = false;
          this.response = response;
          this.handleSummaryResponse();
        })
        .catch(() => {
          this.isLoading = false;
          this.error = true;
        })
    }
  }

  public showOrHideDetails(): void {
    this.showAnalysisDetails = !this.showAnalysisDetails;
  }
}
