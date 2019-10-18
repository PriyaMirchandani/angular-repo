import {Product}from'./product'

export class ProductData {
   productList: Product[]=[{
       id:1001,
       name:"car",
       brand:"hyundai",
       price:20000
   }
   ,
   {
    id:1002,
    name:"cooker",
    brand:"hyawkins",
    price:2000



   },{
    id:1003,
    name:"car",
    brand:"hyundai",
    price:200000


   },{
    id:1004,
    name:"car",
    brand:"hyundai",
    price:20000
}];
getproductList():Product[]
{
    return this.productList;


    
}

}
