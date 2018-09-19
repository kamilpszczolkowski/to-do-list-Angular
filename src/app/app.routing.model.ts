import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TasksDoneListComponent} from './tasks-done-list/tasks-done-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todoTask',
    pathMatch: 'full'
  },
  {
    path: 'todoTask',
    component: TasksListComponent
  },
  {
    path: 'doneTask',
    component: TasksDoneListComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
