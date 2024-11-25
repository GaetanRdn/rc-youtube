import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-8 justify-center items-center h-screen',
  },
  template: `<h1 class="text-3xl">N'hésite pas à me contacter</h1>`,
})
export default class ContactComponent {}
