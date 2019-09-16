import { Component, OnInit } from '@angular/core';

import { PredictionService } from 'src/services/prediction.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public response: any;
  public isLoading = false;
  public videoSelected = null;
  public videoIsSelected = false;
  public videoSelectedFormat = null;
  public formatError = false;

  constructor(private predictionService: PredictionService) {}

  ngOnInit() {
  }

  onFileChange(event) {
    const files = event.target.files;
    const file = files[0];

    if(files && files.length) {
      this.videoSelectedFormat = file.type;
      this.videoSelected = file.name;
      this.videoIsSelected = true;
    }
  }

  onClick() {
    if (this.videoIsSelected) {
      this.isLoading = true;

      this.predictionService.predict(this.videoSelected)
        .then(response => {
          this.isLoading = false;
          this.videoIsSelected = false;
          this.response = response;
        })
        .catch(error => {
          this.isLoading = false;
          this.response = "Erro"
        })
    }
  }
}
