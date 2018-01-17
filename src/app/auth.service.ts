import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import  {Observable} from 'rxjs/observable';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(email: string, password: string) {


    if (password === '1234') {
      return true;
    }
    else {
      this.router.navigateByUrl("/login");
    }
  }

  AdminIsLogged() {
    if (localStorage.AdminloggedIn) {
      return true;
    }
    this.router.navigateByUrl("/login");
  }

  getCurrentUse() {
    let token = localStorage.AdminloggedIn;
    if (!token) {
      return null;
    }
    return true;
  }

  logout() {
    localStorage.removeItem("AdminloggedIn")
    return this.router.navigateByUrl("/login");
  }

}
