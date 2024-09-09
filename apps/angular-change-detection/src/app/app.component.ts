import { Component } from '@angular/core';
import { TitleComponent } from './title.component';

@Component({
  standalone: true,
  selector: 'rc-root',
  template: ` <rc-title />`,
  styles: ``,
  imports: [TitleComponent],
})
export class AppComponent {}
