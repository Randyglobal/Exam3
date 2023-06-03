import { Component } from '@angular/core';
import { Iuser } from 'src/app/interface/user.interface';
import { ServiceService } from 'src/app/service/local-service/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(private Store: ServiceService){}
  User: Iuser ={
    username: '',
    email: '',
    password: '',
  }

  SignIn(){
    this.Store.signin(this.User)
  }
}
