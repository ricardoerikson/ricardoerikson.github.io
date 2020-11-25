import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../custom.types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() link: Link;

  constructor() { }

  ngOnInit(): void {
  }

}
