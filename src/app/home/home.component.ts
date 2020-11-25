import { Component, OnInit } from '@angular/core';
import { Link } from '../custom.types'


@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: Link[] = [
    {
      url: 'https://linkedin.com/in/ricardoerikson',
      classes: 'fab fa-linkedin'
    },
    {
      url: 'https://twitter.com/ricardoerikson',
      classes: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/ricardoerikson',
      classes: 'fab fa-github'
    },
    {
      url: 'https://www.hackerrank.com/ricardoerikson',
      classes: 'fab fa-hackerrank'
    },
    {
      url: 'mailto:ricardo@ricardoerikson.me',
      classes: 'fas fa-at'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
