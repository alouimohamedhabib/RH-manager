import {Injectable, NgModule} from '@angular/core';
import {Http, HttpModule} from "@angular/http";

@Injectable()
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(this.url);
  }

  updateUser(userName) {
    return this.http.patch(this.url +'/' + userName[0], JSON.stringify({name: userName[1]}));
  }
}
