import { Component, OnInit } from '@angular/core';
import { LinkConfig } from '../custom.types';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: LinkConfig[];
  home: any;

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.home = this.config.home;
    this.links = this.config.links;
  }

}
