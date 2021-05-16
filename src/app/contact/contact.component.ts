import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sections: any;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.sections = this.contentService.contact.sections;
  }

}
