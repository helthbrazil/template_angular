import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {
  showLoading = {
    mostrar: false
  };

  labelButton = 'Mostrar Loading';
  title = 'angularMaterial';

  constructor() { }

  ngOnInit() {
  }

}
