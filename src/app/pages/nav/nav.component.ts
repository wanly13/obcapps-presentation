import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cuadroVisible : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  mostrarCuadro() {
    this.cuadroVisible ? this.cuadroVisible = false : this.cuadroVisible = true;
  }
}
