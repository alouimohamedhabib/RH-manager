import {Component, Inject, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {CommonModule} from '@angular/common';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css'],
  providers: [UsersService]
})
export class RessourcesComponent implements OnInit {

  private users: any;
  private toEditUser: any;
  private NewUserData: any;
  private NewUserDataId: any;

  constructor(private ressources: UsersService) {
  }

  ngOnInit() {
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
    let user: any = [ this.NewUserDataId , this.NewUserData]
    this.ressources.updateUser(user).subscribe((response) => {
      console.log(response);
    });
  }
}
