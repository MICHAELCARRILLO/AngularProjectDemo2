import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url: string;
}

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(" we are here beatch");
  }

  mainColor = '#FFFFFF';

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: this.mainColor, url:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Two', cols: 1, rows: 2, color: this.mainColor, url:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Three', cols: 1, rows: 1, color: this.mainColor, url:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Four', cols: 2, rows: 1, color: this.mainColor, url:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  ];

}
