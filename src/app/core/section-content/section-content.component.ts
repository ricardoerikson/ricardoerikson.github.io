import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss'],
  inputs: ['paragraph']
})
export class SectionContentComponent implements OnInit {

  paragraph: any;

  constructor() { }

  ngOnInit(): void {
  }

}
