import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {

  constructor(private http : HttpClient) { }

  postExchangesData(formData: any)
  {
    return this.http.post(environment.apiBaseURL+'/ExchangesStocks',formData)
  }
  getExchangeList()
  {
    return this.http.get(environment.apiBaseURL+'/ExchangesStocks')
  }
  putExchangesData(formData: any)
  {
    return this.http.put(environment.apiBaseURL+'/ExchangesStocks/' + formData.stockExchangeId,formData)
  }
  DeleteExchangesData(id: any)
  {
    return this.http.delete(environment.apiBaseURL+'/ExchangesStocks/' + id)
  }
}

