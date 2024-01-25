import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private _router: Router,
    private _auth: AuthService
  ) {
    
  }

  onLogin(){
    this._auth.login(this.loginObj).subscribe({
      next:()=>{
        this._router.navigateByUrl("home-openai")
      }
    })
  }
}
