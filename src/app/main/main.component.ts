import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mainTitle:string = "Designed for the future";

  // content for first section (design section)
  designSectionContent: Array<any> = [
    {
      title:'Introducing an extensible editor',
      text:'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
    },
    {
      title:' Robust content management',
      text:'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'
    },
  ];

  // state secion content
  stateTitle = 'State of the Art Infrastructure';
  stateText = 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'

  // content for open-source section
  openSectionContent: Array<any> = [
    {
      title:'Free, open, simple',
      text:'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
    },
    {
      title:'Powerful tooling',
      text:'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
