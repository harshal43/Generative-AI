import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj:any={
    "username":"",
    "password":""
  }

  constructor(
    private _router: Router
  ) {
    
  }

  onLogin(){
    if(this.loginObj.username=="admin" && this.loginObj.password=="123"){
      this._router.navigateByUrl("/home-openai");
    }
    else{
      alert("Please enter correct username or password!");
    }
  }
}
