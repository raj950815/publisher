import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EarningService {
  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  geAgreementDetails(): Observable<any> {
    return this.http.get(this.baseUrl + 'agreement_details')
  }

  getPaymentDetails(): Observable<any> {
    return this.http.get(this.baseUrl + 'payment_details')
  }
  updateBank(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'payment_info_update', data)
  }


  getEarningStats(): Observable<any> {
    return this.http.get(this.baseUrl + 'all_earnings')
  }

  getWithdrawEarnings(): Observable<any> {
    return this.http.get(this.baseUrl + 'withdraw_history')
  }

  dateWiseEarning(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'datewise_earning', data)
  }
  requestWithdrawAmount(data: any) {
    return this.http.post(this.baseUrl + 'withdraw_amount', data)
  }
}
