import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EarningService {

  constructor(
    private http:HttpClient
  ) { }

  geAgreementDetails():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/get_agreement_info")
  }

  getPaymentDetails():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/get_payment_info")
  }
  updateBank(data:any):Observable<any>{
    return this.http.post("http://192.168.2.34/publishers/earning/update_payment_info",data)
  }

  getYesterdayEarning():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/yesterday_earning")
  }

  getMonthlyEarning():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/monthly_earning")
  }

  getTotalEarning():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/total_earning")
  }

  getWithdrawEarnings():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/withdraw_history")
  }

  getCompleteInfo():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/datewise_earning")
  }
}
