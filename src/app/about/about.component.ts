import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  sections: any;

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.sections = this.config.about.sections;
  }

}
