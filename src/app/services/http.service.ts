import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', '6uFXGQ3i4cS1_AhW_TmF6hwXvNUnvc7Q');

  constructor(private http: HttpClient) {
    this.getTask();
  }

  getTask() {
    this.http.get(this.URL_DB, {params: this.param})
      .subscribe(tasks => {
        console.log(tasks);
      });
  }
}
