import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SurveyComponent } from './components/survey/survey.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'signup',component: RegisterComponent},
  {path:'login',component:LoginComponent },
  {path:'survey',component:SurveyComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
