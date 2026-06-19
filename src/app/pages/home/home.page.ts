import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage';
import { CurrencyService } from '../../services/currency';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton
    
  ]
})
export class HomePage implements OnInit {

  valor: number = 0;
  origem: string = 'USD';
  destino: string = 'BRL';
  resultado: number = 0;

 constructor(
  private storageService: StorageService,
  private currencyService: CurrencyService
) {}

async converter() {

  this.resultado = await this.currencyService.converter(
    this.valor,
    this.origem,
    this.destino
  );

  const conversao = {
    valor: this.valor,
    origem: this.origem,
    destino: this.destino,
    resultado: this.resultado,
    data: new Date()
  };

  this.storageService.salvarHistorico(conversao);
}

  inverter() {
    const temp = this.origem;
    this.origem = this.destino;
    this.destino = temp;
  }

  ngOnInit() {}
}