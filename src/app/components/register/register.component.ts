import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  username = '';
  email = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit() {

  }
}
