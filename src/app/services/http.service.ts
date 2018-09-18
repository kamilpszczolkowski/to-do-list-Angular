import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from '../model/task';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', '6uFXGQ3i4cS1_AhW_TmF6hwXvNUnvc7Q');

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, {params: this.param}).subscribe(data => {
      console.log(data);
    });
  }
}
