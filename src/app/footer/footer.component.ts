import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<h5>&copy;</h5>
  <h6>all rights reserved</h6>`,
  styles: ['h5{background-color:red};',
  'h6{color:blue;}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
