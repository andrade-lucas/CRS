import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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
import { ProfessorPageComponent } from './pages/college/professor-page/professor-page.component';
import { CreateProfessorPageComponent } from './pages/college/create-professor-page/create-professor-page.component';
import { EditProfessorPageComponent } from './pages/college/edit-professor-page/edit-professor-page.component';
import { EquipmentsPageComponent } from './pages/college/equipments-page/equipments-page.component';
import { CreateEquipmentsPageComponent } from './pages/college/create-equipments-page/create-equipments-page.component';
import { EditEquipmentsPageComponent } from './pages/college/edit-equipments-page/edit-equipments-page.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';
import { AuthService } from './services/auth.service';
import { CollegeService } from './services/college.service';
import { CourseService } from './services/course.service';
import { EquipmentService } from './services/equipment.service';
import { ProfessorService } from './services/professor.service';
import { UserService } from './services/user.service';
import { BlockPageComponent } from './pages/college/block-page/block-page.component';
import { CreateBlockPageComponent } from './pages/college/create-block-page/create-block-page.component';
import { EditBlockPageComponent } from './pages/college/edit-block-page/edit-block-page.component';
import { UserProfilePageComponent } from './pages/account/user-profile-page/user-profile-page.component';

@NgModule({
  declarations: [
    MaskDirective,
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
    EditCoursePageComponent,
    ProfessorPageComponent,
    CreateProfessorPageComponent,
    EditProfessorPageComponent,
    EquipmentsPageComponent,
    CreateEquipmentsPageComponent,
    EditEquipmentsPageComponent,
    LoadingComponent,
    BlockPageComponent,
    CreateBlockPageComponent,
    EditBlockPageComponent,
    UserProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [AuthService, CollegeService, CourseService, EquipmentService, ProfessorService, 
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
