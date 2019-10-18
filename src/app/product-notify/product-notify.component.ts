import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
  styleUrls: ['./product-notify.component.css']
})
export class ProductNotifyComponent implements OnInit {
  @Input("ParentData")  
   product:Product
  @Output()
  notify=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  sendNotification()
  {
    this.notify.emit("you will be notified when the product becomes prime");
  }
}
