import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  error: any;
  form: FormGroup;


  constructor(private user: UsersService, private router: Router) {

    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }


  onSubmit(f) {
    const name = f.value.username;
    const password = f.value.password;
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
