import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public rtr: Router, public srvc: LoginService) {}

  ngOnInit(): void {}

}
