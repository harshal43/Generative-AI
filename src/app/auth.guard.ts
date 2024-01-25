import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);
  let router = inject(Router)

  if(auth.loginAuth.value){
    return true;
  }
  
  router.navigate([""])
  return false;
};
