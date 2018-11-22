import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { MapsComponent } from './pages/maps/maps.component';

import { AppRoutingModule } from './app-routing.module';

import { AgmCoreModule, AgmMarker } from '@agm/core';
import { Error404Component } from './pages/error404/error404.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { StreamVideoMainComponent } from './components/stream-video-main/stream-video-main.component';
import { CamIdAgmMarkerDirective } from './directives/CamIdAgmMarker/cam-id-agm-marker.directive';
import { NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    ConfiguracoesComponent,
    MapsComponent,
    Error404Component,
    NavbarTopComponent,
    NavbarLeftComponent,
    StreamVideoMainComponent,
    CamIdAgmMarkerDirective,
    // AgmMarker
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR-KEY'
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
  // entryComponents: [AgmMarker]
})

export class AppModule { }
