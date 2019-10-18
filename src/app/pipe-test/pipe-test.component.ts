import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {
  name="priya mirchandani";
  date=new Date("2019/10/17");
 
  constructor() { }

  ngOnInit() {
  }

}
