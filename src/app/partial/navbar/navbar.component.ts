import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private _router: Router,
    private _auth: AuthService
  ) {
    
  }
  onLogout(){
    this._auth.loginAuth.next(false);
    this._router.navigateByUrl("/login")
  }
}
