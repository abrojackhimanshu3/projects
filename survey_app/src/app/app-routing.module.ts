import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SurveyComponent } from './components/survey/survey.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'signup',component: RegisterComponent},
  {path:'login',component:LoginComponent },
  {path:'survey',component: SurveyComponent, canActivate: [AuthGuard] },
  {path: 'admin',component:AdminComponent},
  {path: 'AdminPanel',component:AdminPanelComponent},
  {path:'**',component:PageNotFoundComponent},
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
