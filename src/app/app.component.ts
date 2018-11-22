import { Component, NgModule } from '@angular/core';
import * as $ from 'jquery';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'portal-app';

  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
