import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  url = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    user.firstName = this.selectedUser.firstName;
    user.lastName = this.selectedUser.lastName;
    user.email = this.selectedUser.email;
    user.strength = Math.floor(Math.random() * 10) + 1;
    user.speed = Math.floor(Math.random() * 10) + 1;
    user.rizz = Math.floor(Math.random() * 10) + 1;
    user.magic = Math.floor(Math.random() * 10) + 1;
    user.stealth = Math.floor(Math.random() * 10) + 1;
    user.health = Math.floor(Math.random() * 10) + 1;
    user.kd = Math.round((Math.random() * 9 + 1) * 100) / 100;
    user.ratedBy = 0;
    user.rated = 0;
    return this.http.post(this.url, user);
  }
}
