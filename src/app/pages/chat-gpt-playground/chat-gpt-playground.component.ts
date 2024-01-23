import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-gpt-playground',
  templateUrl: './chat-gpt-playground.component.html',
  styleUrls: ['./chat-gpt-playground.component.css']
})
export class ChatGPTPlaygroundComponent {
  isSideSectionVisible = false;
  sideSection(){
    if(this.isSideSectionVisible == false){
      this.isSideSectionVisible = true;
    }
    else{
      this.isSideSectionVisible = false;
    }
  }
}