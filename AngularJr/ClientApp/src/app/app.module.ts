import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { UploadComponent } from './upload/upload.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RecipeServiceService} from './recipe-service.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailSelectComponent } from './recipe-detail-select/recipe-detail-select.component';
import { LoginComponent } from './login/login.component';
import {LoginInterceptor} from './login/login-interceptor';
import {TokenInterceptor} from '../app/login/token-interceptor';
import { RegisterComponent } from './register/register.component';
//import {LoggedInInterceptor} from './login/logged-in-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RecipeContainerComponent,
    RecipeItemComponent,
    CreateRecipeComponent,
    UploadComponent,
    RecipeDetailComponent,
    RecipeDetailSelectComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
     // { path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeServiceService, { provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptor, 
    multi: true
  }
  

],
  bootstrap: [AppComponent]
})
export class AppModule { }
