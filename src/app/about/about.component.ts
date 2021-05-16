import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  sections: any;

  constructor(private config: ContentService) { }

  ngOnInit(): void {
    this.sections = this.config.about.sections;
  }

}
