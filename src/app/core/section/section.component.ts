import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  inputs: ['section']
})
export class SectionComponent implements OnInit {

  section: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.section);
  }

}
