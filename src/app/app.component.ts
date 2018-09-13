import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit(): void{
    this.tasksList = ['Do the shopping', 'Clean the room', 'Learn Angular', 'Make a dinner'];
  }

  add( task ) {
    this.tasksList.push(task);
  }

  remove(task: string){
    this.tasksList = this.tasksList.filter( e => e !== task );
  }

  done(task: string){
    this.tasksDone.push(task);
    this.remove(task);
  }
}

