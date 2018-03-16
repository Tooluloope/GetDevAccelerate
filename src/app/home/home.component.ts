import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show = false;

  toggleCollapse() {
    this.show = !this.show;
  }



  constructor() {
  }
  ngOnInit() {}

  // getStyle() {

  //   if (this.showStyle) {

  //     return '0';
  //   }
  //   // tslint:disable-next-line:one-line
  //   else {
  //     return '';
  //   }
  // }
  // yellow() {
  //   if (this.showStyle) {
  //     this.showStyle1 = false;
  //     this.showStyle2 = false;
  //     return '#FFCC56';
  //   } else {
  //     return '';
  //   }
  // }
  //   yellow1() {
  //     if (this.showStyle1) {
  //     this.showStyle = false;
  //     this.showStyle2 = false;
  //     return '#FFCC56';
  //   } else {
  //     return '';
  //   }
  // }
  // yellow2() {
  //     if (this.showStyle2) {
  //     this.showStyle = false;
  //     this.showStyle1 = false;
  //     return '#FFCC56';
  //   } else {
  //     return '';
  //   }
  // }
}
