import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddTaskComponent} from './add-task/add-task.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TasksDoneListComponent} from './tasks-done-list/tasks-done-list.component';
import {CheckedDirective} from './shared/checked.directive';
import {DateDirective} from './shared/date.directive';
import {TransformTaskPipe} from './shared/transform-task.pipe';
import {SortNamePipe} from './shared/sort-name.pipe';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.model';
import {LoginComponent} from './auth/login/login.component';


const config = {
  apiKey: 'AIzaSyAQMDZR2ghoIraza7ax79eLNTwxXnEk_sc',
  authDomain: 'todo-angular-f4a8e.firebaseapp.com',
  databaseURL: 'https://todo-angular-f4a8e.firebaseio.com',
  projectId: 'todo-angular-f4a8e',
  storageBucket: 'todo-angular-f4a8e.appspot.com',
  messagingSenderId: '204775305159'
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksListComponent,
    TasksDoneListComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
