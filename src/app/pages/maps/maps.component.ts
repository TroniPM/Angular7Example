import { Component, TemplateRef, OnInit, Input, NgModule } from '@angular/core';


import { Pin } from '../../classes/Pin';
import * as $ from '../../../../node_modules/jquery';
import { AgmMarker } from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

// @NgModule({ exports: [AgmMarker] })

/**
 * NÃO CONSIGO CHAMAR $().modal() DAQUI DE DENTRO, ENTÃO SIMULO O CLICK DE UM BOTÃO
 */
export class MapsComponent implements OnInit {
  private LABEL: string = "#li-maps";

  public zoomInicial: Pin = new Pin(0, 0);

  public map: HTMLElement;

  public arrayPins = [
    new Pin(51.5007325, -0.1268141)//BIGBEN LONDRES
  ];

  constructor() {
  }

  markerOnClick(obj: AgmMarker) {
    $('#btn').click();
    console.log(obj);
  }

  ngOnInit() {
    $("#navbarTop>li.active").removeClass("active");
    $(this.LABEL).addClass("active");

    this.findMe();
    this.populateMap();

    this.map = document.getElementById("map");

    /**
     * PARA FAZER COM QUE O SCROLLING DA PAGINA FIQUE NORMAL QUANDO O MODAL FOR ABERTO,
     * TEM QUE REMOVER A CLASS "modal-open" DA TAG "body". DO CONTRÁRIO, QUANDO FOR USAR
     * O SCROLL, ELE SÓ SERÁ PERMITIDO DENTRO DO MODAL.
     */

    $(document).ready(function () {
      //INSERIR BACKDROP NA DIV
      $("#btn").click(function () {
        $("#mapdiv").addClass("back-custom");
        $("#streamDiv").addClass("black-custom");
        // $("body").removeClass("modal-open");
        $("#exampleModal iframe").attr("src", "https://www.youtube.com/embed/SAXpBgkXt60");
      });

      $("#botao-close-modal1, #botao-close-modal2").click(function () {

        //REMOVER BACKDROP DA DIV
        $("#mapdiv").removeClass("back-custom");

        //REMOVER SRC DO IFRAME PARA STOPAR STREAM
        $("#exampleModal iframe").attr("src", "");
      });
    });
  }

  public findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.zoomInicial = new Pin(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  private populateMap() {
    this.arrayPins.push(new Pin(-8.074335, -34.889560, 1));
    this.arrayPins.push(new Pin(-8.072396, -34.881124, 2));
    this.arrayPins.push(new Pin(-8.068073, -34.874622, 3));
    this.arrayPins.push(new Pin(-8.066203, -34.873217, 4));
    this.arrayPins.push(new Pin(-8.084956, -34.881571, 5));
    this.arrayPins.push(new Pin(-8.087527, -34.891377, 6));
    this.arrayPins.push(new Pin(-8.096431, -34.891033, 7));
    this.arrayPins.push(new Pin(-8.100032, -34.887160, 8));
    this.arrayPins.push(new Pin(-8.107751, -34.890539, 9));
    this.arrayPins.push(new Pin(-8.109535, -34.888940, 10));
    this.arrayPins.push(new Pin(-8.111636, -34.897171, 11));
    this.arrayPins.push(new Pin(-8.127156, -34.897805, 12));
    this.arrayPins.push(new Pin(-8.128908, -34.904339, 13));
    this.arrayPins.push(new Pin(-8.196080, -34.932882, 14));
    this.arrayPins.push(new Pin(-8.158510, -34.934405, 15));
    this.arrayPins.push(new Pin(-8.181818, -34.934620, 16));
    this.arrayPins.push(new Pin(-8.157273, -34.933483, 17));
  }
}