import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
import { CreateGuard } from './create.guard';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'CreateRecipe', component: CreateRecipeComponent, canActivate: [CreateGuard]},
  { path: 'RecipeDetail/:id', component: RecipeDetailComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  {  path: '**', redirectTo: 'Login'  }
          
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
