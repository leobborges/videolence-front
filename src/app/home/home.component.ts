import { Component, OnInit } from '@angular/core';

import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public response: any;
  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.configService.postConfig()
    .subscribe(response => {
      console.log(response)
      this.response = response;
    });
  }
}
