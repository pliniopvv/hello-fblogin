import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'src/app/service/facebook.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.facebookService.statusLogin().subscribe(r => console.log(r));
  }

  fbLogin() {
    this.facebookService.logar().subscribe(r => console.log(r));
  }

}
