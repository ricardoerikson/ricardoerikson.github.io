import { Component, OnInit } from '@angular/core';
import { LinkConfig, Version } from '../../custom.types';

import { ContentService } from 'src/app/services/content.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: Version;
  links: LinkConfig[]

  constructor(private contentService: ContentService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Version>('/assets/version.json').subscribe(version => {
      this.version = version;
    });
    this.links = this.contentService.home.links;
  }

}

