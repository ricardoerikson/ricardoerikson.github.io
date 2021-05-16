import { Injectable } from '@angular/core';
import { content } from '../config/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private _home: any = content.home;
  private _about: any = content.about;

  constructor() { }

  get home(): any {
    return this._home;
  }

  get about(): any {
    return this._about;
  }

}
