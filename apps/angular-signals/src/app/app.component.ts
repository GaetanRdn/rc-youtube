import { Component } from '@angular/core';
import { WithOldInputComponent } from './with-old-input.component';
import { WithNewInputComponent } from './with-new-input.component';

@Component({
  selector: 'rc-root',
  imports: [WithOldInputComponent, WithNewInputComponent],
  host: {
    class: 'flex flex-col justify-center items-center w-screen h-screen',
  },
  template: `
    <h1 class="text-2xl font-bold">Welcome in angular-signals project</h1>

    <rc-with-old-input title="Hello there ✌🏼 " disabled />

    <rc-with-new-input title="Hello there ✌🏼 " disabled />
  `,
})
export class AppComponent {}
