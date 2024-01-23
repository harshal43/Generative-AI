import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private _router: Router
  ) {
    
  }
  onClickChatGPT(){
    this._router.navigateByUrl("chatGPT-playground")
  }
  onClickBYOF(){
    this._router.navigateByUrl("bring-your-own-file")
  }
  onclickIG(){
    this._router.navigateByUrl("image-generator")
  }
}
