import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { HeaderComponent } from './header/header.component';
import { ApiService } from 'src/services/api.service';
import { PredictionService } from 'src/services/prediction.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';
import { AnalysisGuardRouteService } from 'src/services/analysis-guard-route.service';

const appRoutes: Routes = [
  { path: 'analysis',
    component: AnalysisComponent,
    canActivate: [AnalysisGuardRouteService],    
  },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    ApiService,
    AuthService,
    StorageService,
    PredictionService,
    AnalysisGuardRouteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
