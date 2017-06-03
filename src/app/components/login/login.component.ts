import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(user)
      .subscribe(
        res => {
          if (res.service.errorCode === 0) {
            console.log(res);
            this.router.navigate(['/profile'])
          }
        },
        error => {
          if (error.status === 403) {
            console.log('Wrong username or password');
          }
          else {
            console.log(error)
          }
        }
      )
  }
}
