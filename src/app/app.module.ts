import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { HeaderComponent } from './header/header.component';
import { ApiService } from 'src/services/api.service';
import { PredictionService } from 'src/services/prediction.service';

const appRoutes: Routes = [
  { path: 'analysis', component: AnalysisComponent },
  { path: '',
    redirectTo: '/analysis',
    pathMatch: 'full'
  },
  { path: '**', component: AnalysisComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    ApiService,
    PredictionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
