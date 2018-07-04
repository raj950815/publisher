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


  getEarningStats():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/earnings")
  }

  getWithdrawEarnings():Observable<any>{
    return this.http.get("http://192.168.2.34/publishers/earning/withdraw_history")
  }

  dateWiseEarning(data:any):Observable<any>{
    return this.http.post("http://192.168.2.34/publishers/earning/datewise_earning",data)
  }
  requestWithdrawAmount(data:any){
    return this.http.post("http://192.168.2.34/publishers/earning/withdraw_amount",data)
  }
}
