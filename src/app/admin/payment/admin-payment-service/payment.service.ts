import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient,
  ) { }

  getPayment(data: any): Observable <any> {
    return this.http.post(this.baseUrl + 'admin/withdrawl_requests', data)
  }

  ChangePaymentStatus(data: any): Observable <any> {
    return this.http.post(this.baseUrl + 'admin/approve_reject_withdrawl', data)
  }
}
