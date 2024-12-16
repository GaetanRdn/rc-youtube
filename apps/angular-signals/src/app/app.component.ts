import { Component } from '@angular/core';
import { WithInputComponent } from './with-input.component';

@Component({
  selector: 'rc-root',
  imports: [WithInputComponent],
  host: {
    class: 'flex flex-col justify-center items-center w-screen h-screen',
  },
  template: `<h1 class="text-2xl font-bold">Welcome in angular-signals project</h1>

    <rc-with-input titleWithOldWay="Hello there ✌🏼 " /> `,
})
export class AppComponent {}
