import {Component, Inject, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {CommonModule} from '@angular/common';
import {UsersService} from '../users.service';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css'],
  providers: [UsersService]
})
export class RessourcesComponent implements OnInit {

  public users: any;
  public toEditUser: any;
  public NewUserData: any;
  public NewUserDataId: any;
  public showTheForm: boolean;
  public form: FormGroup;

  constructor(private ressources: UsersService) {}

  ngOnInit() {
    this.toEditUser = "null"
    this.ressources.getUsers().subscribe(
      response => {

        this.users = response.json();
      }
    );
  }

  editUser(user) {
    this.toEditUser = user;
    this.NewUserData = user.name;
    this.NewUserDataId = user.id;
  }

  save() {
    let user: any = [this.NewUserDataId, this.NewUserData]
    this.ressources.updateUser(user).subscribe((response) => {
      console.log(response);
    });
  }

  delete(user) {
    const id = user.id;
    this.ressources.deleteUser(id).subscribe((response) => {
      console.log(response)
      let index = this.users.indexOf(user);
      if (response.status == 200 && response.ok == true) {
        this.users.splice(index, 1);
      } else {
        console.log("Something gone wrong");
      }
    });
  }

  edit(user) {
    this.showTheForm = true;
    this.toEditUser = user;
  }

  onsubmit() {
    console.log(this.toEditUser);
    this.ressources.updateUser(this.toEditUser).subscribe((response) => {
      console.log(response);
    })
  }
}
