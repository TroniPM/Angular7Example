import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { MapsComponent } from './pages/maps/maps.component';
import { Error404Component } from './pages/error404/error404.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: PerfilComponent
  },
  {
    path: 'settings',
    component: ConfiguracoesComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(APP_ROUTES)]
})

export class AppRoutingModule { }