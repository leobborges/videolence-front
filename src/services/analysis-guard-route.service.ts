import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AnalysisGuardRouteService implements CanActivate {

  constructor(
    private storage: StorageService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    if (this.storage.hasItem('Authorization') && this.storage.getObject('Authorization').authToken.length > 0) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
