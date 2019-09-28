import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: string;

  constructor(
    private storage: StorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = (this.storage.hasItem('Authorization') ? this.storage.getObject('Authorization').username : '');
  }

  public logout(): void {
    this.storage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }

}
