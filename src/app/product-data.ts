import {Product}from'./product'

export class ProductData {
   productList: Product[]=[{
    productId:1001,
       name:"car",
       brand:"hyundai",
       price:20000
   }
   ,
   {
    productId:1002,
    name:"cooker",
    brand:"hyawkins",
    price:2000



   },{
    productId:1003,
    name:"car",
    brand:"hyundai",
    price:200000


   },{
    productId:1004,
    name:"car",
    brand:"hyundai",
    price:20000
}];
getproductList():Product[]
{
    return this.productList;


    
}

}
