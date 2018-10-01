import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TasksDoneListComponent} from './tasks-done-list/tasks-done-list.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todoTask',
    pathMatch: 'full'
  },
  {
    path: 'todoTask',
    component: TasksListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'doneTask',
    component: TasksDoneListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
