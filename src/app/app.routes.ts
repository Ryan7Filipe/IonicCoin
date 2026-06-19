import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import ('./pages/home/home.page').then( (m) => m.HomePage ),
  },
 
  {
    path: 'historico',
    loadComponent: () => import('./pages/historico/historico.page').then( m => m.HistoricoPage)
  },
  {
    path: 'configuracoes',
    loadComponent: () => import('./pages/configuracoes/configuracoes.page').then( m => m.ConfiguracoesPage)
  },
];
