import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private error: boolean;

  constructor(private user: UsersService, private router: Router) {
    this.error = false;
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f)
    const name = f.value.Login;
    const password = f.value.last;

    this.user.logUser(name, password).subscribe((response) => {
      if (response.status == 200 && response.json().length) {
        this.error = false;
        localStorage.setItem("AdminloggedIn", JSON.stringify(response.json()));
        this.router.navigateByUrl('/ressources');

      } else {
        this.error = true;
      }
    })

  }

}
