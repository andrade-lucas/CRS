import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

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
import { EditCollegePageComponent } from './pages/college/edit-college-page/edit-college-page.component';
import { DeleteConfirmationComponent } from './components/shared/delete-confirmation/delete-confirmation.component';
import { CreateUserPageComponent } from './pages/college/create-user-page/create-user-page.component';
import { EditUserPageComponent } from './pages/college/edit-user-page/edit-user-page.component';
import { CoursesPageComponent } from './pages/college/courses-page/courses-page.component';
import { CreateCoursePageComponent } from './pages/college/create-course-page/create-course-page.component';
import { EditCoursePageComponent } from './pages/college/edit-course-page/edit-course-page.component';

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
    CreateCollegePageComponent,
    EditCollegePageComponent,
    DeleteConfirmationComponent,
    CreateUserPageComponent,
    EditUserPageComponent,
    CoursesPageComponent,
    CreateCoursePageComponent,
    EditCoursePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
