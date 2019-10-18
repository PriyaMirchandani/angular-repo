import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=new ProductData().getproductList();
  selectedProduct:Product;
  childData:string;
  constructor() { }

  ngOnInit() {
  }
onSelect(product:Product)
{

  this.selectedProduct=product;
}
share()
{
  window.alert("hi..this product has been shared");
}
notifyUser(event)
{
  this.childData=event;
  window.alert(event);
}
}
