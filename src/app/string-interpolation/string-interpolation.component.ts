import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "Jhon";
  person = {
    firstname: "Jhon",
    lastname: "Teles",
    age: 50,
    adress: "Route 100"
  }
  idx = 0;
  colors = ['primary', 'accente', 'warn', '']
  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      this.idx = (this.idx+1) % this.colors.length;
    },100)
  }

}
