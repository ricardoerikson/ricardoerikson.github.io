import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
import { ConfigService } from '../../services/config.service';


@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss'],
  inputs: ['paragraph']
})
export class SectionContentComponent implements OnInit {

  config: any;
  paragraph: any;
  compiledText: string;

  constructor(private configService: ConfigService) {
    this.config = configService.config;
  }

  ngOnInit(): void {
    if (this.paragraph.templates) {
      const compiled = _.template(this.paragraph.text);
      this.paragraph.text = compiled(_.pick(this.config, this.paragraph.templates));
    }
  }

}
