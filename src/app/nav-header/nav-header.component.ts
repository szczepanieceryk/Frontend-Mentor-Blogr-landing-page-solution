import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  isActive = false;
  dropdownIsActive = false;
  // content for header 
  title:string = 'A modern publishing platform';
  text:string = 'Grow your audience and build your online brand';

  constructor() { }

  ngOnInit(): void {
  }

  menuActive(){
    this.isActive = !this.isActive
  }

  dropdownActive(){

    this.dropdownIsActive = !this.dropdownIsActive;

    console.log('działa')

  }
}
