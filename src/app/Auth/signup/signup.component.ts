import { Component } from '@angular/core';
import { Iuser } from 'src/app/interface/user.interface';
import { ServiceService } from 'src/app/service/local-service/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss','../signin/signin.component.scss']
})
export class SignupComponent {
  constructor( private Service: ServiceService){}
  User: Iuser = {
    username: '',
    email: '',
    password: '',
  }

  register(){
   this.Service.signup(this.User)
  }
}
