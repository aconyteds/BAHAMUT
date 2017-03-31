import { Component } from '@angular/core';
import { Config } from "../config";

@Component({
  selector: 'main-title',
  template: `{{title}}`
})

export class TitleComponent { title = Config.title }
