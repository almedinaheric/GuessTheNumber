import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevelButtonComponent } from './game-level-button/game-level-button.component';
import { GamePageComponent } from './game-page/game-page.component';
import { MainPageModuleComponent } from './main-page-module/main-page-module.component';

const routes: Routes = [
  {path:'', component: MainPageModuleComponent},
  {path:'gameLevelButton',component:GameLevelButtonComponent},
  {path:'gamePage/:gameLevel',component:GamePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
