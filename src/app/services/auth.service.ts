import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  apiUrl = environment.API_URL;
  user = JSON.parse(localStorage.getItem('user'));
  isLoggedIn = !!this.user;

  constructor(private http: Http) { }

  login(user) {
    return this.http.post(`${this.apiUrl}/user/login`, user, { withCredentials: true })
      .map(res => {
        if (res.json().service.errorCode === 0) {
          localStorage.setItem('user', JSON.stringify(res.json().payload));
          this.user = res.json().payload;
          this.isLoggedIn = true;
        }
        return res.json()
      })
  }

  logout() {
    return this.http.get(`${this.apiUrl}/user/logout`, { withCredentials: true })
      .map(res => {
        localStorage.removeItem('user');
        this.user = {};
        this.isLoggedIn = false;
        return res.json()
      })
  }

  getCurrentUser() {
    return this.user
  }

}
