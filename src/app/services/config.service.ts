import { Injectable } from '@angular/core';
import * as config from '../config/config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _home: any = config.home;
  private _links: any = config.links;

  constructor() { }

  get home(): any {
    return this._home;
  }

  get links(): any {
    return this._links;
  }

}
