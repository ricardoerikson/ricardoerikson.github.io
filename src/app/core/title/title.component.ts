import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  inputs: ['level', 'title']
})
export class TitleComponent implements OnInit {

  level: number;
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
