import { Component, OnInit } from '@angular/core';

import { PredictionService } from 'src/services/prediction.service';
import PredictViewModel from 'src/models/PredictViewModel';
import PredictionViewModel from 'src/models/PrediticionViewModel';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public response: PredictViewModel;
  public summaryResponse: PredictionViewModel[];
  public isLoading = false;
  public videoSelected = null;
  public videoIsSelected = false;
  public videoSelectedFormat = null;
  public showAnalysisDetails = false;
  public fileURL = null;

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
    this.videoSelectedFormat = null;
    this.showAnalysisDetails = false;
    this.fileURL = null;
  }

  public onFileChange(event): void {
    const files = event.target.files;
    const file = files[0];

    var URL = window.URL;

    if(files && files.length) {
      this.videoSelectedFormat = file.type;
      this.videoSelected = file.name;
      this.videoIsSelected = true;

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
        .catch(error => {
          this.isLoading = false;
        })
    }
  }

  public showOrHideDetails(): void {
    this.showAnalysisDetails = !this.showAnalysisDetails;
  }
}
