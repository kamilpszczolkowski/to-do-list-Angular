import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from '../model/task';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';
  readonly param: HttpParams;

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getParams(): HttpParams {
    const uid = this.authService.user.uid;
    const query = {'userId': uid};
    return new HttpParams().set('apiKey', '6uFXGQ3i4cS1_AhW_TmF6hwXvNUnvc7Q')
      .append('q', JSON.stringify(query));
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.getParams()});
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, {params: this.getParams()}).subscribe(data => {
      console.log(data);
    });
  }
}
