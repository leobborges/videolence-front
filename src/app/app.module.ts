import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ApiService } from 'src/services/api.service';
import { PredictionService } from 'src/services/prediction.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
  ],
  providers: [
    ApiService,
    PredictionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
