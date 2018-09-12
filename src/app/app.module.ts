import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksDoneListComponent } from './tasks-done-list/tasks-done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksListComponent,
    TasksDoneListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
