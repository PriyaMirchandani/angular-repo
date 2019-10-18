import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  textColor="text-color";
  textBkColor="text-bkcolor";
greetingStyle=[
this.textColor,
this.textBkColor
]

   i=0;
  message:string="welcome to greeting component";

  toggleColor1='orange';
  toggleBackgroundColor='red';
  
  constructor() { }

  ngOnInit() {
  }
  sayGreet(event)
  {
  console.log("event");
  this.message="goodmorning"+" "+event.type+" "+event.target.value;
}
toggleColor()
{

    if(this.i%2==0)
    {
      this.toggleColor1='orange'
      this.toggleBackgroundColor='red';
    }
    else
    {
      this.toggleColor1='red'
      this.toggleBackgroundColor='orange'
    }
  this.i+=1;
}
}
