import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  sections: any;
  config: any;

  constructor(private contentService: ContentService, private configService: ConfigService) {
    this.config = configService.config;
  }

  ngOnInit(): void {
    this.sections = this.contentService.about.sections;
  }

}
