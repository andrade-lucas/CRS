import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { UsersPageComponent } from './pages/college/users-page/users-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { DashboardPageComponent } from './pages/college/dashboard-page/dashboard-page.component';
import { CollegesPageComponent } from './pages/college/colleges-page/colleges-page.component';
import { CreateCollegePageComponent } from './pages/college/create-college-page/create-college-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    UsersPageComponent,
    FramePageComponent,
    DashboardPageComponent,
    CollegesPageComponent,
    CreateCollegePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
