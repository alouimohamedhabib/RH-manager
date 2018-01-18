import {Injectable, NgModule} from '@angular/core';
import {Http, HttpModule} from "@angular/http";

@Injectable()
export class UsersService {
  private url = 'http://localhost:3000';

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(this.url + "/profile");
  }

  updateUser(object) {
    let url = this.url + '/profile/' + object.id
    return this.http.patch(url, object);
  }

  logUser(name, password) {
    // return an observer
    return this.http.get(this.url + "/admins/?username=" + name + "&password=" + password);
  }

  deleteUser(id) {
    return this.http.delete(this.url + '/profile/' + id);
  }
}
