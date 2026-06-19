import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = 'https://open.er-api.com/v6/latest/';

  constructor(private http: HttpClient) {}

  async converter(
    valor: number,
    origem: string,
    destino: string
  ): Promise<number> {

    const dados: any = await firstValueFrom(
      this.http.get(this.apiUrl + origem)
    );

    const taxa = dados.rates[destino];

    return valor * taxa;
  }
}
