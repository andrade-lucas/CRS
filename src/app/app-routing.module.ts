import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { UsersPageComponent } from './pages/college/users-page/users-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { DashboardPageComponent } from './pages/college/dashboard-page/dashboard-page.component';
import { CollegesPageComponent } from './pages/college/colleges-page/colleges-page.component';
import { CreateCollegePageComponent } from './pages/college/create-college-page/create-college-page.component';
import { EditCollegePageComponent } from './pages/college/edit-college-page/edit-college-page.component';
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
import { AuthService } from './services/auth.service';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthService],
    component: FramePageComponent,
    children: [
      {path: '', component: DashboardPageComponent}
    ]
  },
  {
    path: 'users',
    canActivate: [AuthService],
    component: FramePageComponent,
    children: [
      {path: '', component: UsersPageComponent},
      {path: 'create', component: CreateUserPageComponent},
      {path: 'edit/:id', component: EditUserPageComponent}
    ]
  },
  {
    path: 'colleges',
    canActivate: [AuthService],
    component: FramePageComponent,
    children: [
      {path: '', component: CollegesPageComponent},
      {path: 'create', component: CreateCollegePageComponent},
      {path: 'edit/:id', component: EditCollegePageComponent}
    ]
  },
  {
    path: 'courses',
    canActivate: [AuthService],
    component: FramePageComponent,
    children: [
      {path: '', component: CoursesPageComponent},
      {path: 'create', component: CreateCoursePageComponent},
      {path: 'edit/:id', component: EditCoursePageComponent}
    ]
  },
  {
    path: 'professors',
    canActivate: [AuthService],
    component: FramePageComponent,
    children: [
      {path: '', component: ProfessorPageComponent},
      {path: 'create', component: CreateProfessorPageComponent},
      {path: 'edit/:id', component: EditProfessorPageComponent},
    ]
  },
  {
    path: 'equipments',
    canActivate: [AuthService],
    component: FramePageComponent,
    children: [
      {path: '', component: EquipmentsPageComponent},
      {path: 'create', component: CreateEquipmentsPageComponent},
      {path: 'edit/:id', component: EditEquipmentsPageComponent}
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
