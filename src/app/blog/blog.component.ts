import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  sections: any;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.sections = this.contentService.blog.sections;
  }

}
