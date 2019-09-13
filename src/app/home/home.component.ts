import { Component, OnInit } from '@angular/core';

import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public response: any;
  public isLoading = false;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
  }

  onClick() {
    this.isLoading = true;
    this.configService.postConfig()
    .subscribe(response => {
      this.isLoading = false;
      this.response = response;
    });
  }
}
