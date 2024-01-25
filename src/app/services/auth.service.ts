import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginAuth = new BehaviorSubject<boolean>(false);
  constructor() { }

  login({username, password}: any): Observable<any>{
    if(username == "admin" && password == "123"){
      this.loginAuth.next(true);
      return of ({res: "200"})
    }
    console.log(username);
    
    return throwError(new Error("Failed to login"))
  }
}
