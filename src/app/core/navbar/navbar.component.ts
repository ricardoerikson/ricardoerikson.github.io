import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  config: any;

  constructor(private configService: ConfigService) {
    this.config = configService.config;
  }

  ngOnInit(): void {
  }

}
