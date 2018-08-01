import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  getUsersInfo(data: any): Observable <any> {
    return this.http.post(this.baseUrl + 'admin/accounts', data)
  }

  changeAccStatus(data: any): Observable <any> {
    return this.http.post(this.baseUrl + 'admin/approve_reject_publisher', data)
  }
}
