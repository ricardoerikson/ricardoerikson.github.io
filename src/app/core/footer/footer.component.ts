import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Version } from '../../custom.types';

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
        this.http.get<Version>('/assets/version.json').subscribe(version => {
            this.version = version;
        });

    }

}

