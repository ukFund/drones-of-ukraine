import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const baseUrl = 'http://localhost:8080/api/users';
export interface ICreateBody {
  ip: string;
}

@Injectable({
  providedIn: 'root',
})
export class IpService {
  constructor(private http: HttpClient) {}

  public getMyIp(): Observable<any> {
    return this.http.get('https://api64.ipify.org?format=json');
  }

  public create(data: ICreateBody): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
