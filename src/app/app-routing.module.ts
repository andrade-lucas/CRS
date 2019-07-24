import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { UsersPageComponent } from './pages/college/users-page/users-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { DashboardPageComponent } from './pages/college/dashboard-page/dashboard-page.component';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: '', component: DashboardPageComponent}
    ]
  },
  {
    path: 'users',
    component: FramePageComponent,
    children: [
      {path: '', component: UsersPageComponent}
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reset-password', component: ResetPasswordPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
