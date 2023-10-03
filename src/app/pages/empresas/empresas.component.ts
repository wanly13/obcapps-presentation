import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {
  openInfoClient : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openCloseInfo(){
    this.openInfoClient ? this.openInfoClient=false  : this.openInfoClient=true;
  }
  

}
