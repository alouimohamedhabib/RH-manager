import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  form: FormGroup;
  // username: FormControl;
  // password: FormControl;

  constructor() {

    this.form = new FormGroup({
      username: new FormControl("" , Validators.required),
      password: new FormControl("" , Validators.required)
    }) ;
  }

  ngOnInit() {
  }


}
