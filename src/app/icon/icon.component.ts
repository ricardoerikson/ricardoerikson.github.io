import { Component, Input, OnInit } from '@angular/core';
import { LinkConfig } from '../custom.types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() link: LinkConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
