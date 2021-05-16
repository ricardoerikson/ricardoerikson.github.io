import { Component, OnInit } from '@angular/core';
import { LinkConfig } from '../custom.types';
import { ContentService } from '../services/content.service';


@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: LinkConfig[];
  home: any;

  constructor(private config: ContentService) { }

  ngOnInit(): void {
    this.home = this.config.home;
    this.links = this.config.links;
  }

}
