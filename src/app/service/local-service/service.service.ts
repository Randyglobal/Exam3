import { Injectable } from '@angular/core';
import { LocalService } from '../local-user/local.service';
import { Iuser } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private local: LocalService) { }

  signup(user: Iuser) {
    const signUpStore = this.local.get('User')

    let userData: Object[] = [];

    if (signUpStore.status == true) {
      userData = signUpStore.data;
      if (user["username"] == '' && user["email"] == '' && user["password"] == '') {
        alert('Please Verify Your Inputs!!!');
        return;
      }

      if (user.email.includes('@')) {
        console.log(user.email);      
      }else{
        alert('email must contain @ ex. @gmail.com')
        return;
      }

      // if (user.password.length >= 7) {
      //   alert('Strong password');
      // }
      if (user.password.length == 4) {
        alert('weak password please make it strong');
        return;
      }
      

      for( const objectsCreated of signUpStore.data){
        if (user["username"] == objectsCreated["username"] || user["email"] == objectsCreated["email"]) {
          alert('User already exist');
          return;
        }else{
          continue
        }
    }
   
    }
    userData.push(user)
    if (user.password.length > 5 ) {
      alert('Wow Strong password');
    }else if (user.password.length <= 3) {
      alert('Very Weak Passsword, please put a strong password')
      return;
    }
    console.log(userData);
    this.local.set('User', userData);
    window.location.replace('http://localhost:4200/products')
    alert('Account Created')
    // if (user.password.length > 4) {
    //   alert('Wow Strong password')
    //    window.location.reload()
    // }
  }

  signin(user: Omit<Iuser, 'email'>) {
   
    let signInUser = this.local.get('User')

    let signin;
    for (const userObject of signInUser.data){
      if (userObject["username"] == '' || userObject["password"] == '') {
        alert('Please check Inputs')
      } 
       if(user["username"] == userObject["username"] && user["password"] == userObject["password"] ){
       alert('Welcome To 7task' + userObject.username)
       window.location.replace('http://localhost:4200/products')
       return;
      }else{
        continue
      }
    }
    alert('Wrong information provided')
  }
}
