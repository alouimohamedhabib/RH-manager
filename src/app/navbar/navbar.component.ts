import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active: boolean;
  private auth: AuthService;
  constructor(private auth: AuthService) {
    this.active = this.auth.getCurrentUse()
    console.log(this.active);
  }

  ngOnInit() {
  }

}
