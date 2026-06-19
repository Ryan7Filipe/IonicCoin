import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  salvarHistorico(conversao: any) {

    const historico =
      JSON.parse(localStorage.getItem('historico') || '[]');

    historico.push(conversao);

    localStorage.setItem(
      'historico',
      JSON.stringify(historico)
    );
  }

  obterHistorico() {

    return JSON.parse(
      localStorage.getItem('historico') || '[]'
    );
  }

  limparHistorico() {

    localStorage.removeItem('historico');
  }
}