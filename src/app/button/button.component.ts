import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() showLoading: any;
  countButton: number;

  constructor() { }

  ngOnInit() {
    this.countButton = 0;
  }


  action() {
    this.countButton++;
    this.showLoading.mostrar = true;
    setTimeout(() => {
      this.showLoading.mostrar = false;
    }, 3000);
  }
}
