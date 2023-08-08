import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.userService.selectedUser = {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      strength: null,
      speed: null,
      rizz: null,
      magic: null,
      stealth: null,
      health: null,
      kd: null,
      ratedBy: null,
      rated: null

    }
  }
}
