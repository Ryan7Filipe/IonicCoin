import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StorageService } from '../../services/storage';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NgFor]
})
export class HistoricoPage implements OnInit {

  historico: any[] = [];


  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.historico = this.storageService.obterHistorico();
  }

}
