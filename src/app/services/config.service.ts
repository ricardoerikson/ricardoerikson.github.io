import { Injectable } from '@angular/core';
import { content } from '../config/content';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _home: any = content.home;
  private _about: any = content.about;
  private _links: any = content.links;

  constructor() { }

  get home(): any {
    return this._home;
  }

  get links(): any {
    return this._links;
  }

  get about(): any {
    return this._about;
  }

}
