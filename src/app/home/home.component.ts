import { Component, OnInit } from '@angular/core';
import { LinkConfig } from '../custom.types';


@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: LinkConfig[] = [
    {
      url: 'https://linkedin.com/in/ricardoerikson',
      classes: 'fab fa-linkedin',
      tooltip: 'LinkedIn'
    },
    {
      url: 'https://twitter.com/ricardoerikson',
      classes: 'fab fa-twitter',
      tooltip: 'Twitter'
    },
    {
      url: 'https://github.com/ricardoerikson',
      classes: 'fab fa-github',
      tooltip: 'GitHub'
    },
    {
      url: 'https://www.hackerrank.com/ricardoerikson',
      classes: 'fab fa-hackerrank',
      tooltip: 'HackerRank'
    },
    {
      url: 'mailto:ricardo@ricardoerikson.me',
      classes: 'fas fa-at',
      tooltip: 'Email'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
