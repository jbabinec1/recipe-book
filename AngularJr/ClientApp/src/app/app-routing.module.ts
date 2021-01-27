import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {RecipeContainerComponent} from './recipe-container/recipe-container.component';


const routes: Routes = [
  { path: 'RecipeContainer', component: RecipeContainerComponent }
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 /* declarations: [],
  imports: [
    CommonModule ]
  */
})
export class AppRoutingModule { }
