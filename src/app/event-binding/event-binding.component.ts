import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My button";
  save(){
    console.log("Clicado");
  }
  i = 0;
  constructor() { }

  spinnerMode = "determinate";
  btnEnable = true;

  ngOnInit(): void {
  }

  inc(){
    this.i++;
    this.buttonName ="It was clicked " +this.i+ " times";
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "inderteminate"
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate"
    },3000 )
  }

}
