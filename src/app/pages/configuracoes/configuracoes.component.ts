import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { User } from '../../classes/user';
import * as $ from '../../../../node_modules/jquery';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
  private LABEL: string = "#li-settings";

  ngOnInit() {
    $("#navbarTop>li.active").removeClass("active");
    $(this.LABEL).addClass("active");
  }

  public model = new User("Temer Presidaaaaa!!", 'haha@kkk.com', "bsb", "texto aqui");
  private form;

  constructor(private http: HttpClient) { }


  submitted = false;
  onSubmit(formVar: NgForm) {
    this.form = formVar.value;

    console.log(this.form);

    this.submitted = true;
    this.model = new User(this.form.nome, this.form.email, this.form.cidade, this.form.msg);

  }

  get diagnostic() { return JSON.stringify(this.model); }
}