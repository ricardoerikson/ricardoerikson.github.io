import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Version } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: Version;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Version>('assets/version.json').subscribe(version => {
      this.version = version;
    });

  }

}

