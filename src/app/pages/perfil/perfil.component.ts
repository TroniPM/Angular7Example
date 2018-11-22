import { Component, OnInit } from '@angular/core';

import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';
import * as $ from '../../../../node_modules/jquery';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private LABEL: string = "#li-perfil";

  constructor() { }

  ngOnInit() {
    $("#navbarTop>li.active").removeClass("active");
    $(this.LABEL).addClass("active");
  }

}
