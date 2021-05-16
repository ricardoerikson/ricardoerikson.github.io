import { Component, OnInit } from '@angular/core';
import { LinkConfig } from '../custom.types';
import { ConfigService } from '../services/config.service';
import { ContentService } from '../services/content.service';


@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: LinkConfig[];
  home: any;
  textColor: string;
  config: any;

  constructor(private contentService: ContentService, private configService: ConfigService) {
    this.config = configService.config;
  }

  ngOnInit(): void {
    this.home = this.contentService.home;
    this.links = this.contentService.home.links;
    this.textColor = this.config.iconsColor;
  }

}
