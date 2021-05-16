import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config: any;

  constructor() {
    this._config = config;
  }

  get config(): any {
    return this._config;
  }

}
