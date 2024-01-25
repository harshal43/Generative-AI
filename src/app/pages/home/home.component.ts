import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards:any[] =[
    {
      "title": "ChatGPT",
      "link": "/chatGPT-playground"
    },
    {
      "title": "Playground Library",
      "link": "chatGPT-playground"
    },
    {
      "title": "Bring Your Own Files",
      "link": "/bring-your-own-file"
    },
    {
      "title": "Translate Your Files",
      "link": "chatGPT-playground"
    },
    {
      "title": "Transcribe Your Files",
      "link": "chatGPT-playground"
    },
    {
      "title": "Research Assistant",
      "link": "chatGPT-playground"
    },
    {
      "title": "Image Generator",
      "link": "/image-generator"
    }
  ]

  constructor(
    private _router: Router
  ) {
    
  }
  onClickChatGPT(){
    this._router.navigateByUrl("chatGPT-playground")
  }
  onClickBYOF(){
    this._router.navigateByUrl("")
  }
  onclickIG(){
    this._router.navigateByUrl("image-generator")
  }
}
