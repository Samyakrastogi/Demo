import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  // name = {
  //   fname : 'Samyak',
  //   lname : "Rastogi"
  // };
  // naam = "Samyak hai mera  naam"
  // getName(){
  //   return this.name.lname;
  // }
  // array = ['Samyak','rohan','mohan'];
  // a=100;
  // b=200;
  // siteURL = window.location.href

  // function call on button click
  getGender(gender : any)
  {
    alert(gender);
  }

  // Events in Angular
  // myEvent(){
  //   console.warn()
  // }

}
