import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  // active flag for menuActive function (mobile menu)
  isActive = false;
  // content for header 
  title:string = 'A modern publishing platform';
  text:string = 'Grow your audience and build your online brand';

  constructor() { }

  ngOnInit(): void {
  }

  menuActive(){
    this.isActive = !this.isActive
  }
}
