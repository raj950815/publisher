import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from '../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  getPayment(): Observable <any> {
    const data = {}
    return this.http.post(this.baseUrl + 'admin/admin_earning/all_withdrawl_requests', data)
  }
}
