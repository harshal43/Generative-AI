import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './partial/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ChatGPTPlaygroundComponent } from './pages/chat-gpt-playground/chat-gpt-playground.component';
import { BringYourOwnFilesComponent } from './pages/bring-your-own-files/bring-your-own-files.component';
import { ImageGeneratorComponent } from './pages/image-generator/image-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    LeaderboardComponent,
    ChatGPTPlaygroundComponent,
    BringYourOwnFilesComponent,
    ImageGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
