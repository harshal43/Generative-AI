import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ChatGPTPlaygroundComponent } from './pages/chat-gpt-playground/chat-gpt-playground.component';
import { BringYourOwnFilesComponent } from './pages/bring-your-own-files/bring-your-own-files.component';
import { ImageGeneratorComponent } from './pages/image-generator/image-generator.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home-openai",
    component: HomeComponent,
  },
  {
    path: "leaderboard",
    component: LeaderboardComponent
  },
  {
    path: "chatGPT-playground",
    component: ChatGPTPlaygroundComponent
  },
  {
    path: "bring-your-own-file",
    component: BringYourOwnFilesComponent
  },
  {
    path: "image-generator",
    component: ImageGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }