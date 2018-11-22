import { Component, OnInit } from '@angular/core';
import * as $ from '../../../../node_modules/jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private LABEL: string = "#li-home";

  constructor() { }

  ngOnInit() {
    $("#navbarTop>li.active").removeClass("active");
    $(this.LABEL).addClass("active");
  }
}
