import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public isLoading = false;
  public formLoginError = false;
  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private storage: StorageService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.storage.hasItem('Authorization') && this.storage.getObject('Authorization').authToken.length > 0) {
      this.router.navigateByUrl('/analysis');
    }
  }

  onSubmit() {
    this.isLoading = true;

    this.authService.login(
      this.loginForm.value.login,
      this.loginForm.value.password,
    ).then(response => {
      this.isLoading = false;
      this.storage.setObject('Authorization', response);
      this.router.navigate(['/analysis']);
    }).catch(error => {
      this.isLoading = false;
      this.formLoginError = true;
    });
  }
}
