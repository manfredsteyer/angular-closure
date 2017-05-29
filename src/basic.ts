import {Component, Injectable} from '@angular/core';
import { DemoService} from 'stuff-lib';
import { fromByteArray } from 'base64-js';

const sha256 = require('sha256');
const other = require('sha256/other');


@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
@Injectable()
export class Basic {
  ctxProp: string;
  constructor(private demoService: DemoService) {
    this.ctxProp = `Hello World`;

    this.demoService.info = 'Hello World';
    console.log('demoService', this.demoService.doStuff());
    console.log('other', other);
  }

  doStuff() {
    console.log('demoService', this.demoService.doStuff());
    this.ctxProp = fromByteArray(sha256(this.ctxProp));
  }
}

